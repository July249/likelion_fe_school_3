import React from 'react';
import './productPrice.css';

export default function ProductPrice(props) {
  return (
    <strong className="m-price">
      {props.price}
      <span>원</span>
    </strong>
  );
}
