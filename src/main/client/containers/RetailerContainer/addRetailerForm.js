import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button } from 'antd';
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

function AddRetailerForm({ addRetailer }) {
  const [clothData, setClothData] = useState({
    name: '',
    mobile: '',
    adress: '',
    shopName: '',
  });

  return (
    <div>
      <Form display="inline" style={{ overflowY: 'scroll', height: '550px', marginTop: '20px' }}>
        <Form.Item
          {...formItemLayout}
          validateStatus
          label="Name"
          help=""
        >
          <Input onChange={(e) => setClothData({ ...clothData, name: e.target.value })} style={{ width: '80%' }} placeholder="Retailer name" />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus
          label="Mobile Number"
          help=""
        >
          <Input onChange={(e) => setClothData({ ...clothData, mobile: e.target.value })} style={{ width: '80%' }} type="number" placeholder="Mobile number" />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus
          label="Address"
          help=""
        >
          <Input onChange={(e) => setClothData({ ...clothData, adress: e.target.value })} style={{ width: '80%' }} placeholder="Address" />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          validateStatus
          label="Shop Name"
          help=""
        >
          <Input onChange={(e) => setClothData({ ...clothData, shopName: e.target.value })} style={{ width: '80%' }} placeholder="Shop Name" />
        </Form.Item>

      </Form>

      <Button
        onClick={() => addRetailer(clothData)}
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

AddRetailerForm.propTypes = {
  addRetailer: PropTypes.func.isRequired,
};

export default AddRetailerForm;
