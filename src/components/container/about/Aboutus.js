import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import reactLogo from "../../../images/reactLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { changeProfile } from "../../../Slice/ProfileSlice";
const Aboutus = () => {
  const profile = useSelector((store) => store.profile.profileStatus);
  const dispatch = useDispatch();
  return (
    <div className="min-h-[90vh]">
      <div className="w-[100%] bg-[#406E00] text-white flex flex-col justify-center items-center rounded-b-lg h-20 mb-4">
        <h1 className="text-5xl font-bold">About Website</h1>
      </div>
      <div
        className="flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:mx-3  "
        // className="h-auto" desktop
      >
        <div className="w-[60%] h-[100%] text-xl text-justify">
          <p>
            This website application is made using ReactJS and other libraries.
          </p>
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </li>
          </ul>
        </div>
        <div className="">
          <img src={reactLogo} />{" "}
        </div>
      </div>
      <div className="flex justify-center items-center mt-2 mb-4">
        {profile ? (
          <Link
            to="/aboutus"
            onClick={() => {
              dispatch(changeProfile());
            }}
          >
            <button className="rounded-lg bg-[#406E00] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#3d4630] transition-all hover:shadow-lg hover:shadow-[#181F1C] hover:bg-[#181F1C]">
              Hide Profile
            </button>
          </Link>
        ) : (
          <Link
            to="/aboutus/profile"
            onClick={() => {
              dispatch(changeProfile());
            }}
          >
            <button className="rounded-lg bg-[#406E00] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#3d4630] transition-all hover:shadow-lg hover:shadow-[#181F1C] hover:bg-[#181F1C]">
              Show Profile
            </button>
          </Link>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Aboutus;
