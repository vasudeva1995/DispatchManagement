import React from 'react';
import { InputNumber, Input } from 'antd';
import 'antd/es/input/style/css';
import 'antd/es/input-number/style/css';
import RemoveIcon from '@material-ui/icons/Delete';

function SizeComponent({ removeItem, sizeValues, onChange }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
      <InputNumber value={sizeValues.size || null} onChange={(value) => onChange('size', value)} min={1} style={{ width: '20%' }} />
      <InputNumber value={sizeValues.quantity || null} onChange={(value) => onChange('quantity', value)} min={1} style={{ width: '20%' }} />
      <InputNumber value={sizeValues.price || null} onChange={(value) => onChange('price', value)} min={1} style={{ width: '20%', marginRight: '20px' }} />
      <div onClick={() => removeItem()} style={{ width: '10%' }}><RemoveIcon /></div>
    </div>
  );
}

export default SizeComponent;
