import { IMG_URL } from "./Config";
const ResturantCard = ({name , city, area, cloudinaryImageId}) => {
    return(
      <div className='card'>
        <img src={IMG_URL + cloudinaryImageId}/>
        {/* <h2>{props.resturant.info?.name}</h2> */} {/* without destructing  */}
        <h2>{name}</h2>
        <h3>{city}</h3>
        <h4>{area}</h4>
      </div>
    );
  }
  export default ResturantCard;