import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondPage from './SecondPage.js';
import { Link } from 'react-router-dom';
import PaymentNavbar from './paymentNavbar.js';

const AddAccountPage = () => {
  const [state, setState] = useState({
    accName: '',
    accNum: '',
    bankName: '',
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    setState({
      ...state,
      [event.target.name]: selectedValue,
    });
  };

  //TODO save to DB and sent bill to line group chat
  const onSubmit = () => {
    console.log(state.accName, state.accNum, state.bankName);
  };

  const bankList = [
    {
      value: 'TTB',
      label: 'ทหารไทยธนชาติ',
    },
    {
      value: 'SCB',
      label: 'ไทยพานิช',
    },
    {
      value: 'KBANK',
      label: 'กสิกรไทย',
    },
  ];

  return (
    <div>
      <PaymentNavbar />
      <div class="w-full grid grid-flow-row auto-rows-max p-5">
        <h1>บัญชีธนาคาร </h1>
        <select
          class="h-10 my-3"
          name="bankName"
          value={state.bankName}
          onChange={handleSelectChange}
        >
          {bankList.map((option) => (
            <option value={option.value}>{option.label} </option>
          ))}
        </select>
        <h1> ชื่อบัญชี</h1>
        <input
          class=" p-2 border-2 my-3"
          placeholder="ชื่อบัญชี"
          type="text"
          name="accName"
          value={state.accName}
          onChange={handleChange}
        />
        <h1> เลขบัญชี</h1>
        <input
          class=" p-2 border-2 my-3"
          placeholder="เลขบัญชี"
          type="number"
          name="accNum"
          value={state.accNum}
          onChange={handleChange}
        />
      </div>
      <div class="flex w-full justify-center">
        <button class="bg-teal-400 px-10 py-2 " onClick={onSubmit}>
          {' '}
          ยืนยันเก็บเงิน{' '}
        </button>
      </div>
      <h1>
        {' '}
        {state.accName}+ {state.bankName}
      </h1>
    </div>
  );
};

export default AddAccountPage;
