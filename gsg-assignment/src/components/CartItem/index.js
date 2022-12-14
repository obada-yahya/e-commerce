import React, { useState } from "react";
import style from "./style.module.css";
const CartItem = ({ price, title, rating, quantity, id, deleteItem }) => {
  const [num, setNumber] = useState(quantity);
  return (
    <div className={style.table}>
      <span>{title}</span>
      <span>{price * num}$</span>
      <span>{rating} / 5</span>
      <span className={style.quantity}>
        <button
          className={style.incBtn}
          onClick={() => (num > 1 ? setNumber(num - 1) : deleteItem(id))}
        >
          -
        </button>
        <div className={style.numberContainer}>{num}</div>
        <button className={style.incBtn} onClick={() => setNumber(num + 1)}>
          +
        </button>
      </span>
    </div>
  );
};

export default CartItem;
