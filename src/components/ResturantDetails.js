import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { IMG_URL } from "./Config";

const ResturantDetails = () => {
  const params = useParams();
  const { id } = params;

  const [resturantdeatil, setResturantdetail] = useState(null);
  useEffect(() => {
    getResturantsInfo();
  }, []);

  async function getResturantsInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.179683924526447&lng=79.93636887520552&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setResturantdetail(json.data);
  }
  console.log(resturantdeatil);

  return !resturantdeatil ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h2>Restaurant Id : {id}</h2>
        <h1>{resturantdeatil.cards[0]?.card?.card?.info?.name}</h1>
        <img
          src={
            IMG_URL +
            resturantdeatil.cards[0]?.card?.card?.info.cloudinaryImageId
          }
        />
        <h3>{resturantdeatil.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{resturantdeatil.cards[0]?.card?.card?.info?.locality}</h3>
        <h3>{resturantdeatil.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>Menu</h3>
        {Object.values(resturantdeatil?.menu?.items).map((item) => (
          <h1>item?.name</h1>
        ))}
      </div>
    </>
  );
};
export default ResturantDetails;
