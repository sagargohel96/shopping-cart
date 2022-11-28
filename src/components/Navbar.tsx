import { Link } from "react-router-dom";
import { Cart, ConfirmPage, Home } from "../module";
import { BsCart4 } from "react-icons/bs";
import "../index.css";
const Navbar = () => {
  return (
    <div className=" p-2  flex flex-row justify-between bg-slate-400 items-center p-1">
      <div className="flex logo items-center ml-10 font-black text-xl">
        Shopping-Cart
      </div>
      <div className=" flex-1 items-center text-xl">
        <ul
          className="flex justify-around 
      "
        >
          <li className="flex ">
            <Link to="/">
              <Home />
            </Link>
          </li>
          <li className="flex">
            <Link to="/cart">
              <Cart />
            </Link>
          </li>
          <li className="flex">
            <Link to="/confirmpage">
              <ConfirmPage />
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <BsCart4 className="svgsize mr-10" />
      </div>
    </div>
  );
};

export default Navbar;
