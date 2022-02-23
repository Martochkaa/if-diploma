import React from 'react';
import FilterItem from "./FilterItem";

const FilterContent = ({props, setItemFav}) => {
  
  return (
    <>
      <section className="section-filter">
        <div className="title-filter">
          <p className="secondTitle">{props[0].type}</p>
        </div>
        <div className="gallery">
          {props.map((item) => (
            <FilterItem item={item} setItemFav={setItemFav}/>
          ))
          }
        </div>
      </section>
    </>
  )
}

export default FilterContent;