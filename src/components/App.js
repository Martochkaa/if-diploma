import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {deleteItemFromFav, setItemInFav} from "../store/reducers/cartReducer";
import data from '../constants/data';
import Header from "./Primary/Header";
import TopSection from "./Primary/TopSection";
import Category from "./Category/Category";
import Instagram from "./Primary/Instagram";
import Footer from "./Primary/Footer";
import Sale from "./Sale/Sale";
import ItemCard from "./Primary/Item";
import Bag from "./Bag/Bag";
import Favorites from "./Favorites/Favorites";
import '../styles/App.css';
import '../styles/TopSection.css';
import '../styles/Category.css';
import '../styles/Sale.css';
import '../styles/Footer.css';
import '../styles/EnterSearch.css';
import '../styles/Account.css';
import '../styles/SaleContent.css';
import '../styles/ItemCard.css';
import '../styles/Bag.css';
import '../styles/Instagram.css';
import '../styles/FilterItems.css';
import '../styles/Block.css';


function App() {
  
  return (
     <Router>
       <Route exact path="/">
         <MainPage />
       </Route>
       <Route exact path="/:id" >
         <TopSection />
         <ItemCard data={data}/>
       </Route>
       <Route exact path="/bag">
         <Bag />
       </Route>
       <Route exact path="/favorites">
         <Favorites />
       </Route>
      <Footer />
     </Router>
  );
}

function MainPage() {
  const dispatch = useDispatch();
  const itemsFav = useSelector(state => state.cart.itemsInFav);
  const setItemFav = (item) => {
    const isItemInFav = itemsFav.some(elem => elem.id === item.id);
    if (isItemInFav) {
      dispatch(deleteItemFromFav(item.id));
    } else {
      dispatch(setItemInFav(item));
    }
  }

  return (
  <>
    <Header setItemFav={setItemFav}/>
    <Category setItemFav={setItemFav}/>
    <Sale data={data} setItemFav={setItemFav}/>
    <Instagram />
  </>
  )
}

export default App;



