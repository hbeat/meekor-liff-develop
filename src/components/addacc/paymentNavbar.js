import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SecondPage from './SecondPage.js';
import { Link } from 'react-router-dom';

const PaymentNavbar = () => {
  return (
    <div>
      <div class="w-full bg-teal-400 h-30">
        <h1 class="p-5"> เพิ่มบัญชีรับเงืน</h1>
      </div>
      <div class="flex justify-center  bg-gray-200 w-full ">
          <Link class="p-3" to="/add_account"> บัญชีธนาคาร </Link>
          <Link class="p-3" to='/add_promptpay' > พร้อมเพย์ </Link>

      </div>
    </div>
  );
};

export default PaymentNavbar;
