import React,{useState} from 'react';
import { Form,Input,Button } from 'antd';
import 'antd/es/form/style/css';
import 'antd/es/input/style/css';
import 'antd/es/button/style/css';


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

function AddClothForm({addCloth}) {

  const [clothData,setClothData] = useState({
    name:'',
    sautNumber:'',
    type:'',
    unit:'',
    cost: 0
  });

  return (
    <div>
      <Form display='inline' style={{overflowY:'scroll',height:'550px',marginTop : '20px'}}>
        <Form.Item
          {...formItemLayout}
          validateStatus={true}
          label='Name'
          help={''}
        >
          <Input onChange={(e)=>setClothData({...clothData, name : e.target.value})} style={{width:'80%'}} placeholder='Cloth name' />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus={true}
          label='Saut Number'
          help={''}
        >
          <Input onChange={(e)=>setClothData({...clothData, sautNumber : e.target.value})} style={{width:'80%'}} placeholder='Cloth saut number' />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus={true}
          label='Type'
          help={''}
        >
          <Input onChange={(e)=>setClothData({...clothData, type : e.target.value})} style={{width:'80%'}} placeholder='Cloth type' />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus={true}
          label='Unit'
          help={''}
        >
          <Input onChange={(e)=>setClothData({...clothData, unit : e.target.value})} style={{width:'80%'}} placeholder='Cloth unit' />
        </Form.Item>
        
        <Form.Item
          {...formItemLayout}
          validateStatus={true}
          label='Cost'
          help={''}
        >
          <Input onChange={(e)=>setClothData({...clothData, cost : e.target.value})} type='number' style={{width:'80%'}} placeholder='Cloth cost/unit' />
        </Form.Item>
        
      </Form>
      
      <Button onClick={()=>addCloth(clothData)} style={{position:'absolute',bottom:'0px',left:'0px',width:'100%', height:'50px'}} type="primary" htmlType="submit">
        Add
      </Button>
    </div>
  );
}

export default AddClothForm;

