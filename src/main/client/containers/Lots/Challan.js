import React, { useState, useEffect } from 'react';
import {
  Form, Input, Button, InputNumber, message,
} from 'antd';
import 'antd/es/form/style/css';
import 'antd/es/input/style/css';
import 'antd/es/button/style/css';
import { isEmpty } from 'lodash';
import DynamicDataComponent from '../../components/DynamicDataComponent';


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

function calculateTotalAmount(challan, status, lot) {
  let totalAmount = 0;
  if (status === 'Tailor' && !isEmpty(lot.sizes)) {
    totalAmount += Object.values(lot.sizes).reduce((acc, data) => {
      acc += data.quantity * data.price;
      return acc;
    }, 0);
  }
  if (!isEmpty(challan.data)) {
    totalAmount += Object.values(challan.data).reduce((acc, data) => {
      acc += data.cost;
      return acc;
    }, 0);
  }
  return totalAmount;
}

function addAmountPaid(amountPaid, totalAmountPaid, totalAmount, amountPending) {
  if (amountPaid == null || amountPaid < 0 || amountPaid + totalAmountPaid > totalAmount) {
    message.warning('Invalid attempt');
    return { totalAmountPaid, amountPending };
  }
  totalAmountPaid += amountPaid;
  amountPending = totalAmount - totalAmountPaid;
  return { totalAmountPaid, amountPending };
}

function Challan({
  lot, statusMap, moveToNextStatus, selectedStatus, statusList,
}) {
  const challan = lot && lot.challans && selectedStatus && lot.challans[selectedStatus] ? lot.challans[selectedStatus] : {};
  const status = lot && lot.status ? lot.status : '';
  useEffect(() => {
    if (selectedStatus && !firstTimeCalled) { // to check that its opened from status view challan
      const totalAmount = calculateTotalAmount(challan, status, lot);
      setTotalAmount(totalAmount);
      const obj = addAmountPaid(0, challan.totalAmountPaid, totalAmount, 0);
      setTotalAmountPaid(obj.totalAmountPaid);
      setAmountPending(obj.amountPending);
      setName(challan.name);
      setTotalAmountPaid(challan.totalAmountPaid || 0);
      setData(challan.data);
      setFirstTimeCalled(true);
    }
  });

  const [name, setName] = useState('');
  const [firstTimeCalled, setFirstTimeCalled] = useState(false);
  const [amountPaid, setAmountPaid] = useState(null); // amount paid in one go
  const [totalAmountPaid, setTotalAmountPaid] = useState(0); // total amount paid
  const [amountPending, setAmountPending] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [data, setData] = useState({}); // dynamic data
  const [count, setCount] = useState(0);
  const viewChallan = selectedStatus;
  return (
    <div>
      <Form display="inline" style={{ overflowY: 'scroll', height: '550px', marginTop: '20px' }}>
        <Form.Item
          {...formItemLayout}
          validateStatus
          label="Name"
          help=""
        >
          <Input
            disabled={selectedStatus}
            defaultValue={challan.name || ''}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '80%' }}
          />
        </Form.Item>
        {viewChallan ? (
          <Form.Item
            {...formItemLayout}
            validateStatus
            label="Amount Paid"
            help=""
          >
            <InputNumber value={amountPaid} onChange={(value) => setAmountPaid(value)} style={{ marginRight: '10px', width: '30%' }} />
            <Button
              style={{ background: '#20B2AA', color: 'white' }}
              onClick={() => {
                const obj = addAmountPaid(amountPaid, totalAmountPaid, totalAmount, amountPending);
                setAmountPaid(null);
                setTotalAmountPaid(obj.totalAmountPaid);
                setAmountPending(obj.amountPending);
              }}
            >
Set amount paid

            </Button>
          </Form.Item>
        ) : ''}

        {viewChallan ? (
          <Form.Item
            {...formItemLayout}
            validateStatus
            label="Total Amount Paid"
            help=""
          >
            <div
              style={{ width: '100px', textAlign: 'center' }}
            >
              {totalAmountPaid}
            </div>
          </Form.Item>
        ) : ''}
        {viewChallan ? (
          <Form.Item
            {...formItemLayout}
            validateStatus
            label="Total Amount"
            help=""
          >
            <div style={{ width: '100px', textAlign: 'center' }}>{totalAmount}</div>
          </Form.Item>
        ) : ''}
        {viewChallan ? (
          <Form.Item
            {...formItemLayout}
            validateStatus
            label="Total Amount Pending"
            help=""
          >
            <div style={{ width: '100px', textAlign: 'center' }}>{amountPending}</div>
          </Form.Item>
        ) : ''}
        {!viewChallan ? (
          <Form.Item
            {...formItemLayout}
            validateStatus
            label="Data"
            value=""
            help=""
          >
            <Button
              onClick={() => {
                setData({ ...data, [count]: { label: '', cost: 0 } });
                setCount(count + 1);
              }}
              style={{ background: '#20B2AA', color: 'white', marginBottom: '10px' }}
            >
+  Add Data

            </Button>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ width: '50%', color: '#20B2AA' }}>Label</div>
              <div style={{ width: '30%', color: '#20B2AA' }}>Cost</div>
              <div style={{ width: '10%' }} />
            </div>
            {Object.keys(data || {}).map((id) => (
              <DynamicDataComponent
                data={data[id]}
                onChange={(key, value) => {
                  data[id][key] = value;
                  setData({ ...data });
                }}
                removeItem={() => {
                  delete data[id];
                  setData({ ...data });
                }}
              />
            ))}

          </Form.Item>
        ) : ''}
      </Form>
      <div style={{ position: 'relative' }} />
      <Button
        onClick={() => {
          const challans = lot.challans || {};
          if (!selectedStatus) {
            challans[statusMap[lot.status]] = { name, data, totalAmountPaid };
            moveToNextStatus(lot.lotNo, challans, statusMap[lot.status], statusList);
          } else {
            challans[lot.status] = { name, data, totalAmountPaid };
            moveToNextStatus(lot.lotNo, challans, lot.status, statusList);
          }
        }}
        style={{
          position: 'absolute', bottom: '0px', left: '0px', width: '100%', height: '50px',
        }}
        type="primary"
        htmlType="submit"
      >
        {selectedStatus ? 'OK' : !isEmpty(lot) ? statusMap[lot.status] : ''}
      </Button>
    </div>
  );
}

export default Challan;
