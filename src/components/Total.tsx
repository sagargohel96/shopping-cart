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
    <div className='p-10 flex justify-around sticky top-1 bg-slate-400 '>
      <div className='text-4xl mb-2'>Total quantity: {totalQuantity}</div>
      <div className='text-4xl'>Total price: $ {totalPrice}</div>
    </div>
  );
};

export default Total;
