import style from "./style.module.css";
import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import { pink } from "@mui/material/colors";
import { useCookies } from "react-cookie";
import CartBar from "../CartBar";
import WishListBar from "../WishListBar";
const NavBar = ({ changed, funcChange }) => {
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("cards")));
  }, [changed]);
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("cards")));
  // wishList state and functions
  const [openWishList, setOpenWishList] = useState(false);
  const handleOpenWishList = () => setOpenWishList(true);
  const handleCloseWishList = () => setOpenWishList(false);

  // carts state and functions
  const [openCartList, setOpenCartList] = useState(false);
  const handleOpenCartList = () => setOpenCartList(true);
  const handleCloseCartList = () => setOpenCartList(false);

  const [cookie, setCookie, removeCookie] = useCookies();
  const logout = () => {
    removeCookie("token");
    removeCookie("name");
  };
  const deleteItem = (item) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].rating + items[i].title + items[i].price === item) {
        items.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cards", JSON.stringify(items));
    setItems([...items]);
    funcChange();
  };
  return (
    <>
      <nav className={style.navigation}>
        <div className={style.featuresItems}>
          <a href="/">matter</a>
          <a href="/shop">shop</a>
          <a href="/product">fabric</a>
          <a href="#">journal</a>
          <a href="#">about</a>
        </div>
        <div className={style.loginItems}>
          {!!cookie.name ? (
            <>
              <Avatar sx={{ bgcolor: pink[500] }} onClick={logout}>
                {cookie.name[0]}
              </Avatar>{" "}
            </>
          ) : (
            <a href="/login">login</a>
          )}
          <i className={`fa-solid fa-magnifying-glass ` + style.wishlist}></i>
          <i
            className={`fa-regular fa-heart ` + style.wishlist}
            onClick={handleOpenWishList}
          >
            {items?.length > 0 ? <span>{items.length}</span> : <></>}
          </i>
          <i
            className={`fa-solid fa-bag-shopping ` + style.cartList}
            onClick={handleOpenCartList}
          >
            {items?.length > 0 ? <span>{items.length}</span> : <></>}
          </i>
        </div>
      </nav>
      <div>
        <WishListBar
          items={items}
          open={openWishList}
          handleClose={handleCloseWishList}
          deleteItem={deleteItem}
        />
        <CartBar
          items={items}
          open={openCartList}
          handleClose={handleCloseCartList}
          deleteItem={deleteItem}
        />
      </div>
    </>
  );
};

export default NavBar;
