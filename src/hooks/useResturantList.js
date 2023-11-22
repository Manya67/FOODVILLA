import { useEffect, useState } from "react";

const useResturantList = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getResturants() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.179683924526447&lng=79.93636887520552&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   // console.log(json?.data);
  //   const resturants = json?.data?.cards;
  //   const filter = resturants.map(
  //     (item) => item?.card?.card?.gridElements?.infoWithStyle
  //   );
  //   const filter2 = filter.map((item) => item?.restaurants);
  //   console.log(filter2);
  //   // console.log(resturants);
  //   // setallResturants(
  //   //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   // );
  //   // setFilterResturants(
  //   //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   // );
  // }

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.179683924526447&lng=79.93636887520552&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      // if response is not ok then throw new Error
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();

        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            // initialize checkData for Swiggy Restaurant data
            let checkData =
              json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;

            // if checkData is not undefined then return it
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

        // call the checkJsonData() function which return Swiggy Restaurant data
        const resData = await checkJsonData(json);
        // update the state variable restaurants with Swiggy API data
        setAllRestaurants(resData);
        setFilteredRestaurants(resData);
      }
    } catch (error) {
      console.error(error); // show error in console
    }
  }
  return [allRestaurants, filteredRestaurants];
};
export default useResturantList;
