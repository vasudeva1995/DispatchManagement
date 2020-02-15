import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table,Tag, Button } from 'antd';
import CusTomDrawer from '../../components/CustomDrawer';
import { toggleDrawer,getLotData } from './LotActions';
import 'antd/es/table/style/css';
import 'antd/es/tag/style/css';
import 'antd/es/button/style/css';
import AddLot from './AddLot';
class LotsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
      this.props.getLotData();
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

  render() {
    return (
      <div>
        <Button style={{marginLeft:'calc(100% - 100px)'}} onClick = {()=>this.props.toggleDrawer(true)}>+ Add Lot</Button>
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
          jsxToRender={<AddLot/>}
          title='Add Lot'
        />
       </div>
    );
  }
}

const mapStateToProps = (state) => ({ 
isDrawerOpen: state.LotReducer.isDrawerOpen,
lots: state.LotReducer.lots,
columns: state.LotReducer.columns 
});

export default connect(mapStateToProps, {
  toggleDrawer,
  getLotData
})(LotsContainer);
