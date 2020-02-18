import React,{useState} from 'react';
import { Form,Input,Button } from 'antd';;
import 'antd/es/form/style/css';
import 'antd/es/input/style/css';
import 'antd/es/button/style/css';
import DynamicDataComponent from '../../components/DynamicDataComponent';
import {isEmpty} from 'lodash';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

function Challan({lot,statusMap,moveToNextStatus}) {

const [name, setName] = useState('');
const [amountPaid, setAmountPaid] = useState(0);  // amount paid in one go
const [totalAmountPaid, setTotalAmountPaid] = useState(0);   // total amount paid
const [data, setData] = useState({});
const [count, setCount] = useState(0);
const viewChallan = '';
  return (
    <div>
          <Form display='inline' style={{overflowY:'scroll',height:'550px',marginTop : '20px'}}>
          <Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    label='Name'
                    value={name}
                    help={''}
                  >
                    <Input onChange={(e)=>setName(e.target.value)} style={{width:'80%'}} />
          </Form.Item>
          {viewChallan ?<Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    value={amountPaid}
                    label='Amount Paid'
                    help={''}
                  >                                
                  <Input onChange={(e)=>setAmountPaid(e.target.value)} style={{width:'80%'}} />
          </Form.Item>:''}

          {viewChallan ?<Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    value={totalAmountPaid}
                    label='Total Amount Paid'
                    help={''}
                  >
               <div style={{width:'100px',textAlign:'center'}}>{'0'}</div>
          </Form.Item>:''}
          {viewChallan ?<Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    label='Total Amount'
                    help={''}
                  >
               <div style={{width:'100px',textAlign:'center'}}>{'0'}</div>
          </Form.Item>:''}
          {viewChallan ?<Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    label='Total Amount Pending'
                    help={''}
                  >
               <div style={{width:'100px',textAlign:'center'}}>{'0'}</div>
          </Form.Item>:''}
          {!viewChallan ?<Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    label='Data'
                    value={''}
                    help={''}
                  >
           <Button onClick={()=>{setData({...data,[count]:{label:'',cost:0}});
            setCount(count+1)
          }}
           style={{ background:'#20B2AA',color:'white', marginBottom:'10px'}}>+  Add Data</Button> 
           <div style={{display:'flex',justifyContent:'space-between', marginBottom:'10px' }}>
              <div style={{width:'50%',color:'#20B2AA'}}>Label</div>
              <div style={{width:'30%',color:'#20B2AA'}}>Cost</div>
              <div style={{width:'10%'}}/>
           </div>
           {Object.keys(data).map((id)=><DynamicDataComponent
           data = {data[id]}
           onChange = {(key,value)=>{
            data[id][key]=value; 
            setData({...data})}}
           removeItem={()=>{
            delete data[id];
            setData({...data,
              })}}
           />)}
      
          </Form.Item>:''}
      </Form>
      <div style={{position:'relative'}}>
      </div>
      <Button
       onClick = {()=>{let challans = lot.challans || {};
                  challans = {[statusMap[lot.status]]:{name,data,totalAmountPaid}};
                  moveToNextStatus(lot.lotNo,challans,statusMap[lot.status])
                }}
       style={{position:'absolute',bottom:'0px',left:'0px',width:'100%', height:'50px'}} type="primary" htmlType="submit">
            {!isEmpty(lot) ? statusMap[lot.status]:''}
      </Button>
    </div>
  );
}

export default Challan;

