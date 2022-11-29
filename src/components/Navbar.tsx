import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import "../index.css";
const Navbar = () => {
  return (
    <div className=" p-2  flex flex-row justify-between bg-gradient-to-r from-indigo-500 items-center ">
      <div className="flex logo items-center ml-16 font-black text-xl">
        Shopping-Cart
      </div>
      <div className=" flex-1 items-center text-xl mr-16">
        <ul
          className="flex justify-around 
      "
        >
          <li className="flex text-gray-800  hover:text-orange-100">
            <Link to="/">Home</Link>
          </li>
          <li className="flex  text-gray-800 hover:text-orange-100">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="flex  text-gray-800 hover:text-orange-100">
            <Link to="/confirmpage">Confirmpage</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center cursor-pointer">
        <BsCart4 className="svgsize mr-16 " />
      </div>
    </div>
  );
};

export default Navbar;
