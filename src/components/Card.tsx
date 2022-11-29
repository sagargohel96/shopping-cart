import "../style/headings/heading.css";
import { ProductInterface } from "../interface/ProductInferface";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
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

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg max-h-100">
        <img src={imgurl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Title : {title}</div>
        </div>
        <div className=" flex justify-around px-6 pt-4 pb-2">
          <span className="font-bold text-2xl">Price :₹ {price}</span>
          <span className="font-bold"> Rating : {rating}</span>
        </div>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 px-4 m-4  rounded-full"
        >
          Add to cart
        </button>
      </div>
    </>
  );
};
