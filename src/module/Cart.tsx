import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  return (
    <div className="grid  md:grid-cols-3  sm:grid-cols-1 p-20  gap-10">
      {cart &&
        cart.map((item) => {
          // const imgurl = item.imgurl[0];
          return (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg max-h-100"
              key={item.id}
            >
              <img src={item.images[0]} alt={item.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Title : {item.title}
                </div>
              </div>
              <div className=" flex justify-around px-6 pt-4 pb-2">
                <span className="font-bold text-sm">Price :₹ {item.price}</span>
              </div>

              <div>
                <button className="font-bold bg-slate-500 p-2 m-2 rounded-full">
                  -
                </button>
                <span className="font-bold text-xl">Quantity :</span>
                <button className="font-bold bg-slate-500 p-2 m-2 rounded-full">
                  +
                </button>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 m-4  rounded-full">
                Remove from cart
              </button>
            </div>
          );
        })}
    </div>
  );
};
