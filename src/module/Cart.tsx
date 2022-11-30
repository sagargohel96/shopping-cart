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
      <div className='grid  md:grid-cols-3  sm:grid-cols-1 p-20  gap-10'>
        {cart &&
          cart.map((item) => {
            return (
              <>
                <div className='flex flex-col max-w-sm rounded overflow-hidden shadow h-4/3 p-4 hover:shadow-lg'>
                  <div className='flex justify-center'>
                    <img
                      className='h-60 rounded'
                      src={item.images[0]}
                      alt={item.title}
                    />
                  </div>
                  <div className='flex flex-col justify-between '>
                    <div className='px-6 py-4'>
                      <div className='font-bold text-xl '>
                        Title : {item.title}
                      </div>
                    </div>
                    <div className=' flex justify-around px-6 pt-4 pb-2'>
                      <span className='font-bold text-xl'>
                        Price :₹ {item.price}
                      </span>
                      <span className='font-semibold text-slate-500'>
                        Rating : {item.rating}
                      </span>
                    </div>

                    <div>
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className='font-bold bg-slate-500 p-2 m-2 rounded-full'
                      >
                        -
                      </button>
                      <span className='font-bold text-xl'>
                        Quantity : {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className='font-bold bg-slate-500 p-2 m-2 rounded-full'
                      >
                        +
                      </button>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 m-4  rounded-full'
                      >
                        Remove from cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
