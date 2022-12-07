import React from "react";
import style from "./style.module.css"

const WishListItem = ({ title, price, rating ,deleteItem}) => {
  return (
    <div className={style.item}>
      {title} - {price}$ - {rating} / 5 <i className="fa-solid fa-trash-can" onClick={()=>deleteItem(rating + title + price)}></i>
    </div>
  );
};

export default WishListItem;
