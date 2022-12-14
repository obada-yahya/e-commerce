import React from "react";
import style from "./style.module.css"

const WishListItem = ({ title, price,id,rating ,deleteItem}) => {
  return (
    <div className={style.item}>
      {title} - {price}$ - {rating} / 5 <i className="fa-solid fa-trash-can" onClick={()=>deleteItem(id)}></i>
    </div>
  );
};

export default WishListItem;
