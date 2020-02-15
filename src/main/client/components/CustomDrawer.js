import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form,Input,Button,TreeSelect  } from 'antd';
import Drawer from '@material-ui/core/Drawer';
import { Typography } from '@material-ui/core';
import CrossIcon from '@material-ui/icons/Close';
import MenuItem from '@material-ui/core/MenuItem';
import 'antd/es/form/style/css';
import 'antd/es/input/style/css';
import 'antd/es/button/style/css';
import SizeComponent from './SizeComponent';
import Select from '@material-ui/core/Select';
import {cloneDeep} from 'lodash';
import { callbackify } from 'util';
const drawerWidth = 550;
const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

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

function CustomDrawer({isDrawerOpen,toggleDrawer}) {
  const classes = useStyles();

const [Lots,setLot] =useState({
  lotNo:'',
  clothNo:'',
  brand:'',
  status:'',
  sizes:{}
});

const [count,setCount] = useState(0);
  
  return (
    <div>
      <Drawer
        variant="temporary"
        anchor="right"
        className={classes.drawerHeading}
        classes={{
          paper: classes.drawerPaper,
        }}
        open={isDrawerOpen}
      >
        <div style={{
          width: '100%', height: '50px', background: '#f2eded', padding: '10px',
        }}
        >
          <div style={{width:'42%',justifyContent:'space-between', display:'flex'}}>
          <CrossIcon style={{marginTop:'4px'}} onClick={()=>toggleDrawer(false)} />
          <Typography variant="h6">
            Move To Next Status
          </Typography>
          </div>
          <Form display='inline' style={{overflowY:'scroll',height:'550px',marginTop : '20px'}}>
          <Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    label='Lot Number'
                    help={''}
                  >
                    <Input style={{width:'80%'}} placeholder='Lot Number' />
          </Form.Item>
          <Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    label='Cloth'
                    help={''}
                  >
            <Select style={{width:'80%'}} onChange={(e)=>console.log(e.target.value)}>      
                <MenuItem key="10" value='10'>Ten</MenuItem>
                <MenuItem key="20" value='20'>Twenty</MenuItem>
            </Select>
          </Form.Item>

          <Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    label='Brand'
                    help={''}
                  >
            <Select style={{width:'80%'}} onChange={(e)=>console.log(e.target.value)}>      
                <MenuItem key="10" value='10'>Ten</MenuItem>
                <MenuItem key="20" value='20'>Twenty</MenuItem>
            </Select>
          </Form.Item>

          <Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    label='Tailor'
                    help={''}
                  >
            <Select style={{width:'80%'}} onChange={(e)=>console.log(e.target.value)}>      
                <MenuItem key="10" value='10'>Ten</MenuItem>
                <MenuItem key="20" value='20'>Twenty</MenuItem>
            </Select>
          </Form.Item>

          <Form.Item
                    {...formItemLayout}
                    validateStatus={true}
                    label='Sizes'
                    help={''}
                  >
           <Button onClick={()=>{setLot({...Lots,
            sizes:{...Lots.sizes,[count]:{}}
            })
            setCount(count+1)
          }}
           style={{ background:'#20B2AA',color:'white', marginBottom:'10px'}}>+  Add Size</Button> 
           <div style={{display:'flex',justifyContent:'space-between', marginBottom:'10px' }}>
              <div style={{width:'20%',color:'#20B2AA'}}>Size</div>
              <div style={{width:'20%',color:'#20B2AA'}}>Quantity</div>
              <div style={{width:'20%',marginRight:'20px',color:'#20B2AA'}}>Unit Price</div>
              <div style={{width:'10%'}}/>
           </div>
           {Object.keys(Lots.sizes).map((key)=><SizeComponent
           sizeValues = {Lots.sizes[key]}
           removeItem={()=>{
             const sizeObj = cloneDeep(Lots.sizes);
            delete sizeObj[key];
            setLot({...Lots,
              sizes : sizeObj})}}
           />)}
      
          </Form.Item>
      </Form>
      <Button style={{position:'absolute',bottom:'0px',left:'0px',width:'100%', height:'50px'}} type="primary" htmlType="submit">
            Next Status
          </Button>

        </div>



      </Drawer>
    </div>
  );
}

export default CustomDrawer;

