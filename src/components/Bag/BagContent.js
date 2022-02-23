import React from 'react';
import {useDispatch} from "react-redux";
import {deleteItem} from "../../store/reducers/cartReducer";
import BagItem from "./BagItem";


const BagContent = ({items, count}) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(deleteItem(id))
  }

  return (
    <>
      {items.map((item) => (
      <BagItem item={item} count={count} handleClick={handleClick}/>
        ))}
    </>
  )
}

export default BagContent;

