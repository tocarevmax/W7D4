import React from 'react';
import { Link } from 'react-router-dom';

export default ({ poke }) => {
  const link = `/pokemon/${poke.id}`;
  return (<li> <Link to={link}> <img height="30px" src={poke.image_url}></img> {poke.name} </Link> </li>);
};
