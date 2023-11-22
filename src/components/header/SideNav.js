import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  BsCartFill,
  BsCart,
  BsTelephoneFill,
  BsTelephone,
  BsPostcardFill,
  BsPostcard,
  BsGridFill,
  BsGrid,
} from "react-icons/bs";

export const navStyle = "flex justify-center py-3 rounded-sm";
const SideNav = () => {
  return (
    <div className=" h-[50%]">
      <ul className="flex flex-col justify-center h-[100%] gap-6 w-[100%]">
        <Link to="/">
          <li className={navStyle}>
            <BsGridFill size={32} color="#406E00" />
          </li>
        </Link>
        <Link to="/aboutus">
          <li className={navStyle}>
            <BsPostcardFill size={32} color="#406E00" />
          </li>
        </Link>

        <Link to="/contact">
          <li className={navStyle}>
            <BsTelephoneFill size={32} color="#406E00" />
          </li>
        </Link>

        <Link to="/cart">
          <li className={navStyle}>
            <BsCartFill size={32} color="#406E00" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideNav;
