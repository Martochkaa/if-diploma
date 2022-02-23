import React, {useState} from 'react';
import FilterContent from "../Filter/FilterContent";
import Block from "../Filter/Filter";
import dress from "../../img/categories_images/dress.svg";
import tees from "../../img/categories_images/tees.svg";
import swimwear from "../../img/categories_images/swimwear.svg";
import denim from "../../img/categories_images/denim.svg";
import tops from "../../img/categories_images/tops.svg";
import beauty from "../../img/categories_images/beauty.svg";


const CategoryContent = ({setItemFav}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);
  const [blockData, setBlockData,] = useState([]);
  const fetchData = () => fetch('https://modnikky-api.herokuapp.com/api/catalog')
    .then(res => res.json());

  const ContentFalse = (e) => {
    setIsVisible(false);

    fetchData(e.target.textContent)
      .then((data) => data.filter(obj => obj?.type?.includes(e.target.textContent)))
      .then((data) => setData(data))
      .catch((error) => setData([]))
  }

  const ContentTrue = (e) => {
    setIsVisible(true);
    setData([]);
    setBlockData(e.target.textContent);
  }

  const filterItems = data.length > 0 ? <FilterContent props={data} setItemFav={setItemFav}/> : null
  
  return (
    <>
      <div className="category-container">
        <div className="category-rectContainer">
          <div className="rectangle">
            <img src={dress} className="category-image" alt="dress" />
            <p className="category-text" onClick={ContentFalse}>Dresses</p>
          </div>
          <div className="rectangle">
            <img src={tees} className="category-image" alt="tees" />
            <p className="category-text" onClick={ContentFalse} >Tees</p>
          </div>
          <div className="rectangle">
            <img src={swimwear} className="category-image" alt="swimwear" />
            <p className="category-text" onClick={ContentFalse} >Swimwear</p>
          </div>
          <div className="rectangle">
            <img src={denim} className="category-image" alt="denim" />
            <p className="category-text" onClick={ContentFalse} >Denim</p>
          </div>
          <div className="rectangle">
            <img src={tops} className="category-image" alt="tops" />
            <p className="category-text" onClick={ContentTrue} >Tops</p>
          </div>
          <div className="rectangle">
            <img src={beauty} className="category-image" alt="beauty" />
            <p className="category-text" onClick={ContentTrue} >Beauty</p>
          </div>
        </div>
      </div>
      <div>
      {filterItems}
      {isVisible && <Block  blockData={blockData}/>}
      </div>

    </>
)}

export default CategoryContent;


