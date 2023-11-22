import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../../Slice/CartSlice";
import { BsFillStarFill } from "react-icons/bs";
import { LiaRupeeSignSolid } from "react-icons/lia";

const MenuItem = ({ item }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  console.log(item);
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className="flex w-80 h-96 flex-col rounded-xl bg-[#eaf1ec] bg-clip-border text-black shadow-md">
      <div className="overflow-hidden shadow-lg rounded-xl">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
            item.imageId
          }
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {item.name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          <span className="flex flex-row items-center justify-start gap-x-1">
            <LiaRupeeSignSolid />
            {item.price / 100}
          </span>
          <span className="flex flex-row items-center justify-start gap-x-2">
            {item.ratings.aggregatedRating.rating} <BsFillStarFill />
          </span>
        </p>
      </div>
      <div className="p-6 pt-0 ">
        <button
          data-ripple-light="true"
          type="button"
          className="rounded-lg bg-[#406E00] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-[#3d4630] transition-all hover:shadow-lg hover:shadow-[#181F1C] hover:bg-[#181F1C] disabled:bg-[#181F1C] disabled:cursor-not-allowed disabled:shadow-[#181F1C]"
          onClick={() => {
            handleAddItem(item);
            setCount(1);
          }}
          disabled={count == 1 ? true : false}
        >
          {count == 0 ? "ADD" : "ADDED"}
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
