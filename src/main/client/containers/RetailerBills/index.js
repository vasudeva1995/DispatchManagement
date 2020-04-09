import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table,Tag, Button,Popover, Divider, message, InputNumber } from 'antd';
import CusTomDrawer from '../../components/CustomDrawer';
import { toggleDrawer,getBillData,addBill,getBillDataOnMount,updateAmountPaid } from './RetailerBillActions';
import 'antd/es/table/style/css';
import 'antd/es/tag/style/css';
import 'antd/es/button/style/css';
import 'antd/es/popover/style/css';
import 'antd/es/divider/style/css';
import AddBill from './AddBill';
import Pager from '../../components/Pager';
import {cloneDeep} from 'lodash';

 class RetailerBillsContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      amountToPayMap : {}
    };
  }

  componentDidMount(){
      this.props.getBillDataOnMount({
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
      if(obj.key === 'sizeJson')
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
      if(obj.key === 'retailerNo')
      {
        obj.render = data => this.props.dataStores.retailers[data] ? this.props.dataStores.retailers[data].name : data;
      }
      if(obj.key === 'amountYetNotReceived')
      {
        obj.render = data => parseInt(this.props.billsMap[data].totalAmount,10) - parseInt(this.props.billsMap[data].amountPaid,10);
      }
      if(obj.key === 'payNow'){
        obj.render = data => 
          <div style={{width:'154px', display:'flex',justifyContent:'space-between', fontSize:12, cursor: 'pointer'}}>
               <InputNumber max={parseInt(this.props.billsMap[data].totalAmount,10) - parseInt(this.props.billsMap[data].amountPaid,10)}
                       style={{width:'70px'}} 
                       value={this.state.amountToPayMap[data]}
                       min={1}
                       onChange={(value) => {
                                  let clonedamountToPayMap = cloneDeep(this.state.amountToPayMap);
                                      clonedamountToPayMap[data] = value;
                                      this.setState({amountToPayMap:clonedamountToPayMap});
                                }} />
               <div onClick={()=>{
                      this.props.updateAmountPaid(data,this.state.amountToPayMap[data],this.props.billsMap)
                      let clonedamountToPayMap = cloneDeep(this.state.amountToPayMap);
                          clonedamountToPayMap[data] = null;
                      this.setState({amountToPayMap:clonedamountToPayMap});
                       }}
                      style={{marginTop:'5px'}}>OK</div> 
               <div style={{marginTop:'5px'}} 
                       onClick={()=>{ 
                             let clonedamountToPayMap = cloneDeep(this.state.amountToPayMap);
                             clonedamountToPayMap[data] = null;
                             this.setState({amountToPayMap:clonedamountToPayMap})}}>CANCEL</div>
          </div>
      }
    }
    return tableHeader;
  }
  onPagerInteraction = (pageNumber, pageSize) => {
    const clonedPaginationConfig = {};
    clonedPaginationConfig.pageNumber = pageNumber;
    clonedPaginationConfig.pageSize = pageSize;
    clonedPaginationConfig.range = [(pageNumber - 1) * pageSize + 1, (pageNumber - 1) * pageSize + pageSize];
    this.props.getBillData(clonedPaginationConfig,this.props.statusList);
  };

  closeDrawer = () => {
    this.props.toggleDrawer(false);
    this.billNo =null;
    this.selectedStatus = null;
  }

  render() {
    return (
      <div>
         <div style={{marginBottom:'20px', display:'flex',justifyContent: 'flex-end'}}>
            <div style={{width:'10%'}}>
              <Button style={{background:'#E5EDF3',fontSize:'15px', marginLeft:'calc(100% - 100px)'}} onClick = {()=>this.props.toggleDrawer(true)}>+ Add Bill</Button>
            </div>
            <div style={{width:'10%',padding:'5px'}}>
              <Pager
                {...Object.assign({}, this.props.paginationConfig, { onPagerInteraction: this.onPagerInteraction })}
              />
            </div>
         </div>
        <Table 
          style={{background:'#B0C4DE', marginTop:'20px'}} 
          size={'small'} 
          scroll={{ x: 'max-content' , y: 'max-content' }}
          dataSource={this.props.bills} 
          bordered
          pagination={false}
          columns={this.getTableHeaderToRender(this.props.columns)} />
        <CusTomDrawer
          isDrawerOpen={this.props.isDrawerOpen}
          toggleDrawer={this.closeDrawer}
          jsxToRender={
           <AddBill dataStores={this.props.dataStores}
                   addBill={this.props.addBill}
            />
          }
          title='Add Bill'
        />
       </div>
    );
  }
}

const mapStateToProps = (state) => ({ 
isDrawerOpen: state.RetailerBills.isDrawerOpen,
bills: state.RetailerBills.bills,
billsMap: state.RetailerBills.billsMap,
columns: state.RetailerBills.columns, 
paginationConfig: state.RetailerBills.paginationConfig,
statusMap: state.RetailerBills.statusMap,
statusList: state.RetailerBills.statusList,
dataStores: state.RetailerBills.dataStores
});

export default connect(mapStateToProps, {
  toggleDrawer,
  getBillData,
  addBill,
  getBillDataOnMount,
  updateAmountPaid
})(RetailerBillsContainer);
