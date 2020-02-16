import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table,Tag, Button } from 'antd';
import CusTomDrawer from '../../components/CustomDrawer';
import { toggleDrawer,getLotData,addLot } from './LotActions';
import 'antd/es/table/style/css';
import 'antd/es/tag/style/css';
import 'antd/es/button/style/css';
import AddLot from './AddLot';
import Pager from '../../components/Pager';
import { display } from '@material-ui/system';
 class LotsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
      this.props.getLotData({
        range:[1,10],
        pageNumber:1,
        pageSize:10
      });
  }

  getTableHeaderToRender = (tableHeader) =>{
    let obj = 0;
    for(obj of tableHeader)
    {
      if(obj.key === 'sizes')
      {
        obj.render = data => <Button style={{background:'orange'}}>View</Button>
      }
      if(obj.key === 'status')
      {
        obj.render = data => <Tag color="green">{data || 'Initiated'}</Tag>
      }
      if(obj.key === 'moveStatus')
      {
        obj.render = data => <Button onClick={()=>this.props.toggleDrawer(true)} style={{width:150, background:'#FA8072'}}>Next Status</Button>
      }
    }
    return tableHeader;
  }
  onPagerInteraction = (pageNumber, pageSize) => {
    const clonedPaginationConfig = {};
    clonedPaginationConfig.pageNumber = pageNumber;
    clonedPaginationConfig.pageSize = pageSize;
    clonedPaginationConfig.range = [(pageNumber - 1) * pageSize + 1, (pageNumber - 1) * pageSize + pageSize];
    this.props.getLotData(clonedPaginationConfig);
  };

  render() {
    return (
      <div>
        <div><Button style={{marginLeft:'calc(100% - 100px)'}} onClick = {()=>this.props.toggleDrawer(true)}>+ Add Lot</Button>
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
          jsxToRender={<AddLot addLot={this.props.addLot} />}
          title='Add Lot'
        />
       </div>
    );
  }
}

const mapStateToProps = (state) => ({ 
isDrawerOpen: state.LotReducer.isDrawerOpen,
lots: state.LotReducer.lots,
columns: state.LotReducer.columns,
paginationConfig: state.LotReducer.paginationConfig
});

export default connect(mapStateToProps, {
  toggleDrawer,
  getLotData,
  addLot
})(LotsContainer);
