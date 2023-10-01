import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utility/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [button, setButton] = useState("Login");

  const onlinStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  console.log("cartItems", cartItems, Object.keys(cartItems).length);
 
  return (
    <div className="header">
      <Link to="/">
        <img
          id="imghead"
          alt="sorry"
          src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
        />
      </Link>
      <ul className="niveitem">
        <li id="online-sts">{onlinStatus ? "Online:🟢" : "Ofline:🔴"}</li>
        <li>
          <Link className="text-link" to="/">
            Home
          </Link>{" "}
        </li>
        <li>
          <Link className="text-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-link" to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="text-link" to="/Cart">
            cart--({Object.keys(cartItems).length})
          </Link>
        </li>

        <button
          className="btn-login"
          onClick={() => {
            button === "Login" ? setButton("LogOut") : setButton("Login");
          }}
        >
          {button}
        </button>
      </ul>
    </div>
  );
};
export default Header;
