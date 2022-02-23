import React from 'react';
import SearchResultsItem from "./SearchResultsItem";
import MoreButton from "./MoreButton";

const SearchResults = ({props, visible, setVisible, setItemFav}) => {
  
  return (
    <section className="section-filter">
      <p className="secondTitle">Search results</p>
      <div className="search__gallery">
        {props.length > 0 && props !== [] ?
          props.slice(0, visible).map((item) => (
          <SearchResultsItem item={item} setItemFav={setItemFav}/>
        ))
          :
          <p className="search__notFound">Sorry, there is no matches on your request</p>
          }
      </div>
      {props.length > visible &&
        <MoreButton setVisible={setVisible} />
      }
    </section>
  )
}

export default SearchResults;