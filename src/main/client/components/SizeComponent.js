import React from 'react';
import {InputNumber,Input} from 'antd';
import 'antd/es/input/style/css';
import 'antd/es/input-number/style/css';
import RemoveIcon from '@material-ui/icons/Delete';

function SizeComponent({removeItem}) {
    return (
        <div style={{ display:'flex',justifyContent:'space-between', marginBottom:'10px' }}>
        <InputNumber min={1} style={{width:'20%'}} />
        <InputNumber min={1} style={{width:'20%'}} />
        <InputNumber min={1} style={{width:'20%',marginRight:'20px'}} />
        <div onClick={()=>removeItem()} style={{width:'10%'}}>{<RemoveIcon/>}</div>
        </div>
    )
}

export default SizeComponent;