import React from 'react';
import SaleItem from "./SaleItem";

const SaleContent = ({data, color, indexFirst, indexLast, setItemFav}) => {

  return (
    <>
      {data.slice(indexFirst, indexLast).map((item) => (
       <SaleItem item={item} color={color} setItemFav={setItemFav} />
      ))
      }
    </>
  )
}

export default SaleContent;




