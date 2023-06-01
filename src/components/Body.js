import React, { useEffect, useState } from 'react';
// import ReactDOM  from 'react-dom/client';
// import { resturantlist } from './Config';
import ResturantCard from './ResturantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
  
function filterdata(searchtxt, searchresturants){
     return (searchresturants.filter((resturant) => resturant.data?.data?.name.toLowerCase().includes(searchtxt.toLowerCase())));
}
 
const Body =() =>{

const [searchtxt, setSearchtxt] = useState("");
const [searchresturants, setsearchresturants] = useState([]);
const [allResturants, setallResturants] = useState([]);
const [errorMessage, setErrorMessage] = useState("");



useEffect(()=>{
    getResturants();
}, []);

async function getResturants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.179683924526447&lng=79.93636887520552&offset=31&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
    const json = await data.json();
    // console.log(json);
    setsearchresturants(json?.data?.cards); 
    setallResturants(json?.data?.cards);
}

const searchdata = (searchtxt, searchresturants) =>{
    if(searchtxt!==""){
        const data= filterdata(searchtxt,searchresturants);
        setsearchresturants(data);
        setErrorMessage("");
        if(data.length === 0){
            setErrorMessage("No matches found");
        }}else {
            setErrorMessage("");
            setsearchresturants(searchresturants);
        }
    }; 

    if(!allResturants) return null;
    return (
        <>
        <div className='search-container'>
            <input type='text' className='search-input' placeholder='Search' value={searchtxt} onChange={(e) => {setSearchtxt(e.target.value)}}/>
            <button className='search-btn' onClick={() => {
               searchdata(searchtxt, allResturants);
               
            }}>Search</button>  
        </div>
        {errorMessage && <div className="error-container">{errorMessage}</div>}

       {
        (allResturants.length === 0)?<Shimmer/>:<div className='resturant-list'>
         {searchresturants.map((resturant) => {
        // debugger 
        return (<Link to= {`/resturants/${resturant.data?.data?.id}`}>
            <ResturantCard {...resturant?.data?.data} key = {resturant.data?.data?.id}/></Link>);
      })}
    </div> }</>
    )
  };

  export default Body; 