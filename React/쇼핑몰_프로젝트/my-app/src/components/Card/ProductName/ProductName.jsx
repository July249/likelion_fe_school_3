import React from 'react';
import './productName.css';

export default function ProductName(props) {
  return (
    <strong className="product-name sl-ellipsis">{props.productName}</strong>
  );
}
