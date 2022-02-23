import React from 'react';
import {Link} from "react-router-dom";
import useItemInFav from "../../hooks/useItemInFav";


const FilterItem = ({item, setItemFav}) => {
  
  const isItemInFav = useItemInFav(item.id);
 
  const handleClickFav = (e) => {
    e.stopPropagation();
    setItemFav(item);
  }

  return (
    <>
      <div className="item-sale" key={item.id}>
      <Link to={`${item.id}`}>
        <img  src={item.images[0]} className="img-filter" alt={item.name}/>
      </Link>  
      
        {isItemInFav ? (<div className="wishlistSale" onClick={handleClickFav}> </div>)
        : <div className="saleWishlist" onClick={handleClickFav}> </div> }

        <span className="title-filter"></span>
        <Link to={`${item.id}`}>
        <span className="price-filter">$ {item.price.value / 100}</span>
        </Link>
      </div>
    </>
  )
}

export default FilterItem;