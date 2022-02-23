import React from 'react';
import {Link} from "react-router-dom";
import useItemInFav from "../../hooks/useItemInFav";

const SearchResultsItem = ({item, setItemFav}) => {
  const isItemInFav = useItemInFav(item.id);
  
  const handleClickFav = (e) => {
    e.stopPropagation();
    setItemFav(item);
  }

  return (
    <>
      <div className="filter__item" key={item.id}>
      <Link to={`${item.id}`}>
        <img  src={item.images[0]} className="img-filter" alt={item.name}/>
        </Link>
        {isItemInFav ? (
            <div className="wishlistSale" onClick={handleClickFav}>
            </div>
          ) :
          <div className="saleWishlist" onClick={handleClickFav}>
          </div>
        }
        <span className="title-filter"><Link to={`${item.id}`}></Link></span>
        <span className="price-filter">$ {item.price.value / 100}</span>
      </div>
    </>
  )
}

export default SearchResultsItem;