import '../style/headings/heading.css';
import { ProductInterface } from '../interface/ProductInferface';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useState } from 'react';
import { clsx } from 'clsx';
type CardObj = {
  product: ProductInterface;
  imgurl: string;
  title: string;
  price: number;
  rating: number;
};
type CardProps = {
  cardDetails: CardObj;
};
export const Card = (props: CardProps) => {
  const { imgurl, title, price, rating, product } = props.cardDetails;
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setActive((pre) => !pre);
  };

  return (
    <div className='flex flex-col max-w-sm rounded overflow-hidden shadow h-4/3 p-4 hover:shadow-lg'>
      <div className='flex justify-center'>
        <img className='h-60 rounded' src={imgurl} alt={title} />
      </div>
      <div className='flex flex-col justify-between '>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl '>Title : {title}</div>
        </div>
        <div className=' flex justify-around px-6 pt-4 pb-2'>
          <span className='font-bold text-xl'>Price :₹ {price}</span>
          <span className='font-semibold text-slate-500'>
            Rating : {rating}
          </span>
        </div>
        <div className='flex justify-center'>
          <button
            onClick={handleAddToCart}
            className={clsx(
              'bg-blue-500  text-white font-bold p-2 px-4 m-4  rounded-full',
              [{ 'bg-red-700': active }]
            )}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
