import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCount, incrementCount } from '../actions/productActions';

const ProductComponent = () => {
  const count = useSelector((state) => state.products.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrementCount())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(incrementCount())}>+</button>
    </div>
  );
};

export default ProductComponent;
