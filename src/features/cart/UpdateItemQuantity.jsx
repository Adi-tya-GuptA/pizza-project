import React from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  deleteItem,
  getTotalQuantityById,
  increaseItemQuantity,
} from './cartSlice';

export default function UpdateItemQuantity({ id }) {
  const quantity = useSelector(getTotalQuantityById(id));
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span>{quantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}
