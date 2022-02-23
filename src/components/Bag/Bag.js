import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {proceedToCheckOut} from "../../store/reducers/cartReducer";
import BagContent from "./BagContent";
import maestro from "../../img/maestro-logo.svg";
import visa from "../../img/visa-logo.svg";


const Bag = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [messageIsVisible, setMessageIsVisible] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart);
  const count = useSelector(state => state.cart.itemsInCart.map(item =>
    ({id: item.id,
      quantity: item.quantity,
  price: Number(item.price.value)})))
  
  const cost = count.reduce((sum, item) => (+sum + (+item.price / 100) * item.quantity).toFixed(1), 0);
    const requestPOST = () => {
    const products = items.map(item => item.id).join(', ');
    const url = 'https://modnikky-api.herokuapp.com/api/cart';
    let data = new FormData();
    data.append("json", JSON.stringify(products))

    if(items.length > 0) {
      fetch(url, {
        method: 'POST',
        body: data, 
      })
       
      setIsVisible(false);
      dispatch(proceedToCheckOut());
    }
  }

  return (
    <>
      {isVisible &&
      <section className="section-bag">
        <span className="title-bag">BAG</span>
        <span className="quantity-bag, color_gray">{items.length} items</span>
        <hr/>

      <BagContent items={items} count={count} />

      <div className="Container-bag">
        <p className="total">Total USD $ {cost}</p>
        <button className="button-bag" onClick={requestPOST}>PROCEED TO CHECKOUT</button>
        <div className="iconContainer">
          <img src={maestro} className="icon-bag" alt="maestro" />
          <img src={visa} className="icon-bag" alt="visa" />
        </div>
      </div>
      </section>}
      {messageIsVisible &&
          <>
            <NavLink to="/" className="back">Back</NavLink>
            <h3 className="message-bag">Thank you for ordering, your items are on their way</h3>
          </>
      }
      </>
  )
}

export default Bag;

