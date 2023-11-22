import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "../../../utils/Shimmer";
import { Link } from "react-router-dom";
import useResturantList from "../../../hooks/useResturantList";
import { filterdata } from "../../../utils/functions";

const Body = () => {
  const [searchtxt, setSearchtxt] = useState("");
  const [searchresturants, setsearchresturants] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [allResturants, filteredResturants] = useResturantList();

  const searchdata = (searchtxt, resturants) => {
    if (searchtxt !== "") {
      const data = filterdata(searchtxt, resturants);
      setsearchresturants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches found");
      }
    } else {
      setErrorMessage("");
      setsearchresturants(resturants);
    }
  };

  if (!allResturants) return null;
  return (
    <div className=" my-5 mx-8 flex flex-col items-center gap-8">
      <div className="flex items-center">
        <input
          type="text"
          className="input"
          placeholder="Search Resturants"
          value={searchtxt}
          onChange={(e) => {
            setSearchtxt(e.target.value);
            searchdata(e.target.value, allResturants);
          }}
        />
        <input
          className="button--submit"
          value="Search"
          type="submit"
          onClick={() => {
            searchdata(searchtxt, allResturants);
          }}
        />
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {allResturants?.length === 0 && filteredResturants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap gap-y-6 gap-x-4 justify-center">
          {(searchresturants === null
            ? filteredResturants
            : searchresturants
          ).map((resturant) => {
            return (
              <Link
                to={`/resturants/${resturant.info?.id}`}
                key={resturant.info?.id}
              >
                <ResturantCard {...resturant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
