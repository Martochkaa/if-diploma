import React from 'react';
import {deleteItemFromFav} from "../../store/reducers/cartReducer";
import {useDispatch} from "react-redux";
import FavoritesItem from "./FavoritesItem";


const FavoritesContent = ({items}) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(deleteItemFromFav(id))
  }

  return (
    <>
      {items.map((item) => (
        <FavoritesItem item={item} handleClick={handleClick}/>
        ))}
    </>
  )
}

export default FavoritesContent;