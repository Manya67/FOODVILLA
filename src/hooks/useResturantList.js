import { useEffect, useState } from "react";

const useResturantList = () => {
  const [allResturants, setallResturants] = useState([]);
  const [filterResturants, setFilterResturants] = useState([]);

  useEffect(() => {
    getResturants();
  }, []);

  async function getResturants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.179683924526447&lng=79.93636887520552&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json?.data);
    setallResturants(
      json?.data?.cards[4]?.card.card.gridElements.infoWithStyle?.restaurants
    );
    setFilterResturants(
      json?.data?.cards[4]?.card.card.gridElements.infoWithStyle?.restaurants
    );
  }

  return [allResturants, filterResturants];
};

export default useResturantList;
