import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table,Tag, Button,Popover, Divider, message } from 'antd';
import CusTomDrawer from '../../components/CustomDrawer';
import { toggleDrawer,getLotData,addLot,getLotDataOnMount,moveToNextStatus } from './LotActions';
import 'antd/es/table/style/css';
import 'antd/es/tag/style/css';
import 'antd/es/button/style/css';
import 'antd/es/popover/style/css';
import 'antd/es/divider/style/css';
import AddLot from './AddLot';
import Pager from '../../components/Pager';
import Challan from './Challan';

 class LotsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
      this.props.getLotDataOnMount({
        range:[1,10],
        pageNumber:1,
        pageSize:10
      },this.props.statusList);
      message.config({
        maxCount: 1,
      });
  }

  getTableHeaderToRender = (tableHeader) =>{
    let obj = 0;
    for(obj of tableHeader)
    {
      if(obj.key === 'sizes')
      {
        obj.render = data => <Popover
        placement="bottom" 
        content={
        <div style={{padding:'15px',overflowY:'scroll',overflowX:'hidden',maxHeight:'200px'}}>
          <div style={{fontSize:'16px', width:'200px', display: 'flex',justifyContent:'space-between'}}>
            <div>Size</div>
            <div>Quantity</div>
            <div>Cost</div>
          </div>
        <Divider type="horizontal" style={{margin:'2px'}} />
        {Object.values(data).map((obj)=><div>
           <div style={{fontSize:'12px',width:'200px', display: 'flex',justifyContent:'space-between'}}> 
             <div>{obj.size}</div>
             <div>{obj.quantity}</div>
             <div>{obj.price}</div>
           </div>
           <Divider type="horizontal" dashed style={{margin:'1px'}} />
          </div>)}
        </div>}>
          <div style={{color:'orange'}}>View</div>
          </Popover>
      }
      if(obj.key.includes('-status'))
      {
        obj.render = (data,row) => <div onClick={()=>{
          if(row.challans && row.challans[data]){
          this.lotNo = row.lotNo;
          this.selectedStatus = data;
          this.props.toggleDrawer(true);
          }
          else
          {
            message.warning('Status not yet updated');
          }
        }} style={{color:'#138D75'}}>View</div>
      }
      if(obj.key === 'clothNo')
      {
        obj.render = data => this.props.dataStores.cloths[data] ? this.props.dataStores.cloths[data].name : data;
      }
      if(obj.key === 'brand')
      {
        obj.render = data => this.props.dataStores.brands[data] ? this.props.dataStores.brands[data].name : data
      }
      if(obj.key === 'status')
      {
        obj.render = data => <Tag color="green">{data || 'Initiated'}</Tag>
      }
      if(obj.key === 'moveStatus')
      {
        obj.render = data => <Button onClick={()=>{this.lotNo=data; this.props.toggleDrawer(true)}} style={{width:150, background:'#FA8072'}}>{this.props.statusMap[this.props.lotsMap[data].status]}</Button>
      }
    }
    return tableHeader;
  }
  onPagerInteraction = (pageNumber, pageSize) => {
    const clonedPaginationConfig = {};
    clonedPaginationConfig.pageNumber = pageNumber;
    clonedPaginationConfig.pageSize = pageSize;
    clonedPaginationConfig.range = [(pageNumber - 1) * pageSize + 1, (pageNumber - 1) * pageSize + pageSize];
    this.props.getLotData(clonedPaginationConfig,this.props.statusList);
  };

  closeDrawer = () => {
    this.props.toggleDrawer(false);
    this.lotNo =null;
    this.selectedStatus = null;
  }

  render() {
    return (
      <div>
        <div><Button style={{marginLeft:'calc(100% - 100px)'}} onClick = {()=>this.props.toggleDrawer('addLot')}>+ Add Lot</Button>
        <Pager
             {...Object.assign({}, this.props.paginationConfig, { onPagerInteraction: this.onPagerInteraction })}
        /></div>
        <Table 
          style={{background:'#B0C4DE', marginTop:'20px'}} 
          size={'small'} 
          scroll={{ x: 'max-content' , y: 'max-content' }}
          dataSource={this.props.lots} 
          bordered
          pagination={false}
          columns={this.getTableHeaderToRender(this.props.columns)} />
        <CusTomDrawer
          isDrawerOpen={this.props.isDrawerOpen}
          toggleDrawer={this.closeDrawer}
          jsxToRender={this.props.isDrawerOpen === 'addLot'?
           <AddLot dataStores={this.props.dataStores}
                   statusList={this.props.statusList}
                   addLot={this.props.addLot}
                   statusMap={this.props.statusMap} 
            />
          :<Challan moveToNextStatus={this.props.moveToNextStatus}
                    lot={this.props.lotsMap[this.lotNo]}
                    statusList={this.props.statusList}
                    selectedStatus={this.selectedStatus}
                    statusMap={this.props.statusMap} />}
          title={this.props.isDrawerOpen === 'addLot'?'Add Lot':'Move Status'}
        />
       </div>
    );
  }
}

const mapStateToProps = (state) => ({ 
isDrawerOpen: state.LotReducer.isDrawerOpen,
lots: state.LotReducer.lots,
lotsMap: state.LotReducer.lotsMap,
columns: state.LotReducer.columns,
paginationConfig: state.LotReducer.paginationConfig,
statusMap: state.LotReducer.statusMap,
statusList: state.LotReducer.statusList,
dataStores: state.LotReducer.dataStores
});

export default connect(mapStateToProps, {
  toggleDrawer,
  getLotData,
  addLot,
  getLotDataOnMount,
  moveToNextStatus
})(LotsContainer);
