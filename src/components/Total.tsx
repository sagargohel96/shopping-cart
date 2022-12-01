import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
const Total = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  let totalQuantity = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return (
    <div className='p-10 flex  justify-between fixed bottom-0 bg-slate-200 border-solid border-1 border-gray-600 '>
      <div className='flex text-2xl mb-2'>Total quantity : {totalQuantity}</div>
      <div className='flex ml-10 text-2xl'>Total price: $ {totalPrice}</div>
    </div>
  );
};

export default Total;
