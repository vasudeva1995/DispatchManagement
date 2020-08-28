import React from 'react';
import {InputNumber,Input} from 'antd';
import 'antd/es/input/style/css';
import 'antd/es/input-number/style/css';
import RemoveIcon from '@material-ui/icons/Delete';

function SizeComponent({removeItem,data,onChange}) {
    return (
        <div style={{ display:'flex',justifyContent:'space-between', marginBottom:'10px' }}>
        <Input value = {data.label || null} onChange={(e)=>onChange('label',e.target.value)} style={{width:'50%'}} />
        <InputNumber value = {data.cost || null} onChange={(value)=>onChange('cost',value)} min={1} style={{width:'30%',marginRight:'20px'}} />
        <div onClick={()=>removeItem()} style={{width:'10%'}}>{<RemoveIcon/>}</div>
        </div>
    )
}

export default SizeComponent;