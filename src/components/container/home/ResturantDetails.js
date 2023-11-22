import { useParams } from "react-router-dom";
import Shimmer from "../../../utils/Shimmer";
import { IMG_URL } from "../../../utils/Config";
import MenuItem from "./MenuItem";
import useMenuList from "../../../hooks/useMenuList";

const ResturantDetails = () => {
  const { id } = useParams();
  const [resturantdeatil, menudetail] = useMenuList(id);

  return !resturantdeatil ? (
    <Shimmer />
  ) : (
    <div className="min-h-[100vh] flex flex-col justify-center items-center ">
      <div className="w-[100%] bg-[#406E00] text-white flex flex-col justify-center items-center rounded-b-lg h-72">
        <div className="w-[70%] h-full">
          <div className="min-w-full flex flex-row items-center justify-between h-full ">
            <div className="flex flex-col w-[70%] h-[100%] justify-center items-start gap-5 ">
              <h1 className="text-5xl font-bold">
                {resturantdeatil[0]?.card?.card?.info?.name}
              </h1>
              <div className="flex gap-3">
                <h3>{resturantdeatil[0]?.card?.card?.info?.city}</h3>
                <span> | </span>
                <h3>{resturantdeatil[0]?.card?.card?.info?.locality}</h3>
                <span> | </span>
                <h3>{resturantdeatil[0]?.card?.card?.info?.areaName}</h3>
              </div>
            </div>
            <div className="w-[30%] h-auto">
              <img
                src={
                  IMG_URL +
                  resturantdeatil[0]?.card?.card?.info?.cloudinaryImageId
                }
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] flex flex-wrap gap-x-4 gap-y-2 mt-8">
        {menudetail.map((item) => (
          <MenuItem item={item?.card?.info} key={item?.card?.info?.id} />
        ))}
      </div>
    </div>
  );
};
export default ResturantDetails;
