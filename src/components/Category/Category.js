import React from 'react';
import CategoryContent from "./CategoryContent";


const Category = ({setItemFav}) => {

  return (
    <>
      <section className="section-category">
        <div className="title-category">
         <span className="category-title">Shop by the</span>
         <span className="secondTitle"> Category</span>
        </div>
        <div className="category__container">
         <CategoryContent setItemFav={setItemFav}/>
        </div>
      </section>
    </>
  )
}

export default Category;