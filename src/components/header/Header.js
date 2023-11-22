import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/foodLogo.jpeg";
import SideNav from "./SideNav";

export const Title = () => (
  <Link to="/">
    <div className=" w-[100px] m-3">
      <img src={logo} />
    </div>
  </Link>
);

const HeaderComponent = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-between shadow-2xl">
      <Title />
      <SideNav />
      <div></div>
    </div>
  );
};

export default HeaderComponent;
