import React from 'react';
import {useSelector} from "react-redux";
import FavoritesContent from "./FavoritesContent";


const Favorites = () => {
  const items = useSelector(state => state.cart.itemsInFav);

  return (
    <>
      <section className="section-bag">
        <span >FAVORITES &nbsp;</span>
        <span className="quantity-bag, color_gray">{items.length} items </span>
        <hr/>
        <FavoritesContent items={items} />
      </section>
    </>
  )
}

export default Favorites;