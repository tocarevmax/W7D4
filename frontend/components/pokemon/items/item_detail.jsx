import React from 'react';


const ItemDetail = (props) => {
  // debugger;
  return (
    <div>
      <h1>ITEM DETAIL</h1>
      <img src={props.item.image_url}></img>
      <h1>{props.item.name}</h1>
      <h3>Happiness: {props.item.happiness}</h3>
      <h3>Price: ${props.item.price}</h3>
    </div>
  );
};

export default ItemDetail;
