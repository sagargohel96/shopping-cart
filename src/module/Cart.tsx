import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import Total from '../components/Total';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../features/cart/cartSlice';
export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <>
      <Total />
      <div className='p-20  gap-10'>
        {cart &&
          cart.map((item, index) => {
            return (
              <div
                className='max-h-md  rounded overflow-hidden shadow p-4 hover:shadow-lg flex'
                key={index}
              >
                <div className='justify-center '>
                  <img
                    className=' rounded w-3/4 h-full'
                    src={item.images[0]}
                    alt={item.title}
                  />
                </div>
                <div className='flex justify-around w-full w-5/4'>
                  <div className='grid-col grid gap-6 text-left px-6 py-4'>
                    <div className='font-bold text-xl w-max '>{item.title}</div>
                    <div className='font-bold text-xl'>
                      Price : ₹ {item.price}
                    </div>
                    <div className='font-semibold text-slate-500'>
                      Rating : {item.rating}
                    </div>
                  </div>

                  <div className='grid grid-col'>
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      className='font-bold text-white p-2 m-2 rounded-sm '
                      style={{ background: '#454DA0' }}
                    >
                      -
                    </button>
                    <span className='font-bold  text-xl'>
                      Quantity : {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      className='font-bold  text-white p-2 m-2 rounded-sm'
                      style={{ background: '#454DA0' }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2  m-2  rounded-sm'
                    >
                      Remove from cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
