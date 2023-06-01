import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { ReactDOM } from "react";
import { Link } from "react-router-dom";

export const Title = () => (
  <a href="/">
    <h1>Food Villa</h1>
  </a>
);

const HeaderComponent = () => {
  const [loggedin, setloggedin] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <Title />
      <div className="navitems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>
        </ul>
      </div>
      {!loggedin ? (
        <button
          onClick={() => {
            setloggedin(true);
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setloggedin(false);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default HeaderComponent;
