import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-auto h-[80px] shadow-2xl flex justify-around items-center text-lg font-bold">
      <div>
        <span>Created by </span>
        <Link
          to="https://www.linkedin.com/in/manya-jain62002/"
          className="text-[#406E00]"
        >
          Manya Jain
        </Link>
      </div>
      <div>
        <span>&copy; 2023 </span>
        <Link
          to="https://github.com/Manya67/FOODVILLA"
          className="text-[#406E00]"
        >
          Food Villa{" "}
        </Link>
      </div>
    </div>
  );
};
export default Footer;
