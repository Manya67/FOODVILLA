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

export const navStyle = "flex justify-center";
const SideNav = () => {
  return (
    <div className="w-full md:h-full">
      <ul className="flex flex-row md:flex-col md:justify-evenly w-[100%] h-[100%] items-center gap-6 justify-between ">
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
