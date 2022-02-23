import React from 'react';

const MoreButton = ({ setVisible }) => {
  
  const showMore = () => {
    setVisible(prev => prev + 8)
  }
  return (
    <button className="MoreButton" onClick={showMore}>Show more</button>
  )
}

export default MoreButton;