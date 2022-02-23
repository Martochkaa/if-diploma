import React from 'react';
import {useDispatch} from "react-redux";
import {increaseCount, decreaseCount} from "../../store/reducers/cartReducer";
import {Link} from "react-router-dom";
import cross from "../../img/remove-icon.svg";

const BagItem = ({item, count, handleClick}) => {
  const countGoods = count.filter(e => e.id === item.id);
  const dispatch = useDispatch();
  const decreaseGoods = (id) => {
    dispatch(decreaseCount(id))
  }
  const Count = (id) => {
    dispatch(increaseCount(id))
  }
  
  return (
    <>
      <div className="container-bag" key={item.id}>
        <img src={item.images[1]} className="image-bag" alt="image-bag" />
        <div className="descrContainer">
          <p className="itemName">
            <Link to={`${item.id}`}>{item.name}</Link>
          </p>
          <p className="text-bag">USD ${item.price.value / 100}</p>
          <div className="bag__selectContainer">
            <p className="text-bag">COLOR:</p>
            <select>
              <option value="item">{item.color.name}</option>
            </select>
          </div>
          <div className="bag__selectContainer">
            <p className="text-bag">SIZE:</p>
            <select className="bag__selectNumber">
              {item.availableSizes.join('').split(',').map((item) =>
                <option>{item.trim()}</option>
              )}
            </select>
          </div>
          <div className="bag__selectContainer">
            <p className="text-bag">QUANTITY:</p>
            <div className="change" onClick={() => decreaseGoods(item.id)}>
              <p>-</p>
            </div>
            <p className="count-bag">{countGoods[0].quantity}</p>
            <div className="change" onClick={() => Count(item.id)}>
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="removeContainer">
        <img src={cross} className="cross-bag"
             onClick={() => handleClick(item.id)}
             alt="cross" />
        <span className="text-bag">REMOVE</span>
      </div>
      <hr/>
    </>
  )
}

export default BagItem;


