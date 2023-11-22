import { useEffect, useState } from "react";

const useMenuList = (id) => {
  const [resturantdeatil, setResturantdetail] = useState([]);
  const [menudeatil, setMenudetail] = useState([]);

  useEffect(() => {
    getResturantsInfo();
  }, []);

  async function getResturantsInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.179683924526447&lng=79.93636887520552&catalog_qa=undefined&submitAction=ENTER&restaurantId=" +
        id
    );
    const json = await data.json();
    // console.log(
    //   json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card?.itemCards
    // );
    setResturantdetail(json.data?.cards);
    setMenudetail(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  return [resturantdeatil, menudeatil];
};
export default useMenuList;
