import React, {useState} from 'react';
import SaleContent from "./SaleContent";
import arrow from "../../img/arrow.svg";
import arrowVector from "../../img/arrowVector.svg";

const Sale = ({data, color, setItemFav}) => {
  const [indexFirst, setIndexFirst] = useState(0);
  const [indexLast, setIndexLast] = useState(4);

  const setRight = () => {
    if(indexLast < data.length) {
      setIndexFirst(indexFirst + 1);
      setIndexLast(indexLast + 1)
    }
  }
  
  const setLeft = () => {
    if(indexFirst > 0) {
      setIndexFirst(indexFirst - 1);
      setIndexLast(indexLast - 1)
    }
  }
  
  return (
    <>
      <section className="sale__section">
        <div className="title-category">
          <span className="sale__firstTitle">#MODNIKKY_</span>
          <span className="sale__secondTitle">Sale</span>
        </div>
        <div className="sale__gallery">
          <SaleContent data={data} color={color} indexFirst={indexFirst} indexLast={indexLast} setItemFav={setItemFav}/>
          <div>
            {indexFirst > 0 && <img className="sale__switcher-left sale__switcher" onClick={setLeft} src={arrow} alt="arrow"/>}
            
            {indexLast < data.length &&
              <>
              <img className="sale__switcher-right sale__switcher" src={arrow} alt="arrow"/>
              <img className="sale__switcher-arrow sale__switcher" onClick={setRight} src={arrowVector} alt="arrow"/>
              </>
            }
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Sale;

