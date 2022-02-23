import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteItem, setItemInCart} from "../../store/reducers/cartReducer";
import {Link} from "react-router-dom";
import cross from "../../img/remove-icon.svg";

const FavoritesItem = ({item, handleClick}) => {
  const Bag = useSelector(state => state.cart.itemsInCart);
  const ItemCard = Bag.some(elem => elem.id === item.id);
  const dispatch = useDispatch();
  const ToBag = (elem) => {
    elem.stopPropagation();
    if(ItemCard) {
      dispatch(deleteItem(item.id))
    } else {
      dispatch(setItemInCart(item))
    }
  }
  
  return (
    <>
      <div className="container-bag" key={item.id}>
        <img src={item.images[1]} className="image-bag" alt="image-bag" />
        <div className="descrContainer">
          <p className="itemName">
            <Link to={`${item.id}`}>{item.name}</Link>
          </p>
        </div>
      </div>
      <div className="removeContainer">
        <button className="toBag" onClick={ToBag}>
          {ItemCard ? ('REMOVE FROM BAG'): 'ADD TO BAG'}
        </button>
        <img src={cross} className="cross-bag"
             onClick={() => handleClick(item.id)} alt="cross" />
        <span className="text-bag"> REMOVE </span>
      </div>
      <hr/>
    </>
  )
}

export default FavoritesItem;