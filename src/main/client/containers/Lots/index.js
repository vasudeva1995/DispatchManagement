import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table,Tag, Button } from 'antd';
import CusTomDrawer from '../../components/CustomDrawer';
import { toggleDrawer,getLotData,addLot,getLotDataOnMount,moveToNextStatus } from './LotActions';
import 'antd/es/table/style/css';
import 'antd/es/tag/style/css';
import 'antd/es/button/style/css';
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
      },this.props.statusMap,'calledFromMount');
  }

  getTableHeaderToRender = (tableHeader) =>{
    let obj = 0;
    for(obj of tableHeader)
    {
      if(obj.key === 'sizes')
      {
        obj.render = data => <div style={{color:'orange'}}>View</div>
      }
      if(obj.key.includes('-status'))
      {
        obj.render = data => <div style={{color:'#138D75'}}>View</div>
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
        obj.render = data => <Button onClick={()=>{this.props.toggleDrawer(data)}} style={{width:150, background:'#FA8072'}}>{this.props.statusMap[this.props.lotsMap[data].status]}</Button>
      }
    }
    return tableHeader;
  }
  onPagerInteraction = (pageNumber, pageSize) => {
    const clonedPaginationConfig = {};
    clonedPaginationConfig.pageNumber = pageNumber;
    clonedPaginationConfig.pageSize = pageSize;
    clonedPaginationConfig.range = [(pageNumber - 1) * pageSize + 1, (pageNumber - 1) * pageSize + pageSize];
    this.props.getLotData(clonedPaginationConfig,this.props.statusMap);
  };

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
          toggleDrawer={this.props.toggleDrawer}
          jsxToRender={this.props.isDrawerOpen === 'addLot'?
           <AddLot dataStores={this.props.dataStores} addLot={this.props.addLot} statusMap={this.props.statusMap} />
          :<Challan moveToNextStatus={this.props.moveToNextStatus} lot={this.props.lotsMap[this.props.isDrawerOpen]} statusMap={this.props.statusMap} />}
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
dataStores: state.LotReducer.dataStores
});

export default connect(mapStateToProps, {
  toggleDrawer,
  getLotData,
  addLot,
  getLotDataOnMount,
  moveToNextStatus
})(LotsContainer);
