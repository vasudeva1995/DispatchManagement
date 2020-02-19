import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import MenuItem from '@material-ui/core/MenuItem';
import 'antd/es/form/style/css';
import 'antd/es/input/style/css';
import 'antd/es/button/style/css';
import Select from '@material-ui/core/Select';
import { cloneDeep } from 'lodash'; import SizeComponent from '../../components/SizeComponent';


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

function AddLot({
  addLot, statusMap, dataStores, statusList,
}) {
  const [Lots, setLot] = useState({
    lotNo: '',
    clothNo: '',
    brand: '',
    status: '',
    sizes: {},
  });

  const [count, setCount] = useState(0);

  return (
    <div>
      <Form display="inline" style={{ overflowY: 'scroll', height: '550px', marginTop: '20px' }}>
        <Form.Item
          {...formItemLayout}
          validateStatus
          label="Lot Number"
          help=""
        >
          <Input onChange={(e) => setLot({ ...Lots, lotNo: e.target.value })} style={{ width: '80%' }} placeholder="Lot Number" />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          validateStatus
          label="Cloth"
          help=""
        >
          <Select style={{ width: '80%' }} onChange={(e) => setLot({ ...Lots, clothNo: e.target.value })}>
            {Object.values(dataStores.cloths).map((obj) => <MenuItem key={obj.id} value={obj.id}>{obj.name}</MenuItem>)}
          </Select>
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus
          label="Brand"
          help=""
        >
          <Select style={{ width: '80%' }} onChange={(e) => setLot({ ...Lots, brand: e.target.value })}>
            {Object.values(dataStores.cloths).map((obj) => <MenuItem key={obj.id} value={obj.id}>{obj.name}</MenuItem>)}
          </Select>
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus
          label="Sizes"
          help=""
        >
          <Button
            onClick={() => {
              setLot({
                ...Lots,
                sizes: { ...Lots.sizes, [count]: {} },
              });
              setCount(count + 1);
            }} // added here so that common modules can be made for status
            style={{ background: '#20B2AA', color: 'white', marginBottom: '10px' }}
          >
            +  Add Size
          </Button>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ width: '20%', color: '#20B2AA' }}>Size</div>
            <div style={{ width: '20%', color: '#20B2AA' }}>Quantity</div>
            <div style={{ width: '20%', marginRight: '20px', color: '#20B2AA' }}>Unit Price</div>
            <div style={{ width: '10%' }} />
          </div>
          {Object.keys(Lots.sizes).map((key) => (
            <SizeComponent
              sizeValues={Lots.sizes[key]}
              onChange={(sizeKey, value) => {
                const lotsSizes = Lots.sizes;
                lotsSizes[key][sizeKey] = value;
                setLot({ ...Lots, sizes: lotsSizes });
              }}
              removeItem={() => {
                const sizeObj = cloneDeep(Lots.sizes);
                delete sizeObj[key];
                setLot({
                  ...Lots,
                  sizes: sizeObj,
                });
              }}
            />
          ))}

        </Form.Item>
      </Form>
      <div style={{ position: 'relative' }} />
      <Button
        onClick={() => addLot(Lots, statusList)}
        style={{
          position: 'absolute', bottom: '0px', left: '0px', width: '100%', height: '50px',
        }}
        type="primary"
        htmlType="submit"
      >
            Add
      </Button>
    </div>
  );
}

export default AddLot;
