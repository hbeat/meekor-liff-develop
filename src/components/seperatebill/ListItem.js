import React from 'react';
import { useLocation } from 'react-router-dom';
import Sheet from 'react-modal-sheet';
import styled from 'styled-components';
import axios from 'axios';
import { response } from 'express';
import React, { useState, useEffect } from 'react';

const ListItem = ({ passedData, passToParent }) => {
  const location = useLocation();
  const list = passedData;

  // add property member to item list
  list.forEach(function (e) {
    e.member = ['mem', 'mem2'];
  });
  // console.log(list, 'listttt');

  const [isOpen, setOpen] = React.useState(false);
  const [memberlist, setMemberlist] = useState([]);

  const open = () => setOpen(true);
  const close = () => {
    setOpen(false);
    passToParent(checkedItems);
  };

  /*useEffect(() => {
    axios
      .get('http://localhost:3000/group')
      .then((response) => {
        //console.log(response.data[0].user_id);
        //setMemberlist();
        setMemberlist({ memberlist: response.data[0].user_id });
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(memberlist);
    //console.log(memberlist);
  });*/

  /*  useEffect(() => {
    getProducts();
  });

  const getProducts = async () => {
    await axios.get('http://localhost:3000/group').then(({ data }) => {
      console.log('this is data from api ');
      //console.log('data', data[0].user_id);
      setMemberlist({ memberlist: data[0].user_id });
      console.log(memberlist);
    });
    console.log('data ehre ');
  };
  */
  // mock all member members data
  /*const memberlist = [
    {
      name: 'un',
      id: '124',
      pic: '/dsfs',
    },
    {
      name: 'HB',
      id: '123',
      pic: '/dsfs',
    },
    {
      name: 'Der',
      id: '234',
      pic: '/dsfs',
    },
    {
      name: 'Gade',
      id: '134',
      pic: '/dsfs',
    },
  ];*/

  // ----------check box handling---------------
  const [checked, setChecked] = React.useState([]);

  // mockData(group members)
  const checkList = ['Unn', 'HB', 'Creamder', 'gade'];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    console.log(checkedItems, '------------------------------');
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ', ' + item;
      })
    : '';

  var isChecked = (item) =>
    checked.includes(item) ? 'checked-item' : 'not-checked-item';

  const onSubmit = () => {
    console.log(checkedItems);
  };
  // ----------end of checkbox handling---------

  return (
    <div>
      <span>
        {list.map((l) => (
          <div class="bg-gray-200 mx-5 mb-2 border-2 border-gray-500">
            <div class="flex w-full">
              <input class="p-2 m-2 w-2/4" value={l.item} />
              <input class="p-2 mr-2 mt-2 mb-2 w-1/4" value={l.price} />
            </div>
            <div class="flex justify-between">
              <div>
                {l.member.map((lm) => (
                  <button class="p-3 bg-pink-300 rounded-full m-1">{lm}</button>
                ))}
              </div>
              <button class=" p-3 bg-green-300 rounded-full m-1" onClick={open}>
                {' '}
                +{' '}
              </button>
            </div>
          </div>
        ))}
      </span>
      <Sheet
        rootId="root"
        isOpen={isOpen}
        onClose={close}
        snapPoints={[-5, 200, 0.5]}
        initialSnap={2}
      >
        <Sheet.Container>
          <Sheet.Header />

          <Sheet.Content>
            <BoxList></BoxList>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};
const BoxList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-top: 0px;
  overflow: auto;
`;

const Box = styled.div`
  background-color: #eee;
  border-radius: 12px;
  min-height: 200px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;
export default ListItem;
