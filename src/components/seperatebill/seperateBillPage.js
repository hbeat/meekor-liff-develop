import React, { useState } from 'react';
import ListItem from './ListItem.js';
import { Link } from 'react-router-dom';
import { useState, useLocation } from 'react-router-dom';

const SeperateBill = () => {
  const location = useLocation();
  const [data, setData] = useState('');

  const passToChild = () => {
    setData(location.state);
  };

  const passToParent = (childData) => {
    // setData(childData);
    console.log('from child', childData);
  };
  // passToChild();
  console.log(location);

  return (
    <div>
      <div class="h-screen">
        <div class=" w-screen h-32 min-h-1/5 bg-teal-400">
          <h1 for="title" class="text-3xl text-white pt-5 ml-5">
            ชื่อบิล
          </h1>
          <div>
            <input
              name="billTitle"
              value={location.state.billTitle}
              class=" ml-5 mt-2 rounded-sm w-5/6 h-8 p-1"
            />
          </div>
        </div>
        <div class="ml-5 mt-10">
          <h1 class="text-gray-600 text-lg ">รายการ </h1>
        </div>
        <ListItem
          passedData={location.state.itemList}
          passToParent={passToParent}
        />
        <div class="flex justify-center">
          <Link to="/add_account" class="w-full flex justify-center">
            <button class="w-1/2 bg-green-500 rounded-md p-2 mt-8 text-white">
              {' '}
              เพิ่มบัญชี{' '}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeperateBill;
