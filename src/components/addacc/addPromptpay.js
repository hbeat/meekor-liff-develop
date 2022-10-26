import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondPage from './SecondPage.js';
import { Link } from 'react-router-dom';
import PaymentNavbar from './paymentNavbar.js';

const AddPromptpayPage = () => {
  const [state, setState] = useState({
    accName: '',
    accNum: '',
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };
  //TODO save to DB and sent bill to line group chat
  const onSubmit = () => {
    console.log(state.accName, state.accNum);
  };

  return (
    <div>
      <PaymentNavbar />
      <div class="w-full grid grid-flow-row auto-rows-max p-5">
        <h1> ชื่อบัญชี</h1>
        <input
          class=" p-2 border-2 my-3"
          placeholder="ชื่อบัญชี"
          type="text"
          name="accName"
          value={state.accName}
          onChange={handleChange}
        />
        <h1> หมายเลขโทรศัพท์</h1>
        <input
          class=" p-2 border-2 my-3"
          placeholder="08x-xxx-xxxx"
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
    </div>
  );
};

export default AddPromptpayPage;
