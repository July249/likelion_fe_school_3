import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sale, soldout } from '../modules/stockCounter';

function StockCounter() {
  const { message } = useSelector((state) => ({
    message: state.StockCounter.message,
  }));
  console.log(message);

  const { stock } = useSelector((state) => ({
    stock: state.goodsReducer.stock,
  }));
  console.log(stock);

  const dispatch = useDispatch();

  const onSale = () => dispatch(sale());
  const onSoldout = () => dispatch(soldout());

  useEffect(() => {
    if (stock <= 0) {
      onSoldout();
    } else {
      onSale();
    }
  }, [stock]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default StockCounter;
