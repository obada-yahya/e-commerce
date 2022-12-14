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
    setWishListItems(JSON.parse(localStorage.getItem("cards")));
    setCartListItems(JSON.parse(localStorage.getItem("Cart")));
  }, [changed]);

  // wishList state and functions
  const [wishListItems, setWishListItems] = useState(
    JSON.parse(localStorage.getItem("cards"))
  );
  const [openWishList, setOpenWishList] = useState(false);
  const handleOpenWishList = () => setOpenWishList(true);
  const handleCloseWishList = () => setOpenWishList(false);
  const deleteWishListItem = (itemId) => {
    for (let i = 0; i < wishListItems.length; i++) {
      if (wishListItems[i].id === itemId) {
        wishListItems.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cards", JSON.stringify(wishListItems));
    setWishListItems([...wishListItems]);
    funcChange();
  };

  // cart state and functions
  const [cartListItems, setCartListItems] = useState(
    JSON.parse(localStorage.getItem("Cart"))
  );
  const [openCartList, setOpenCartList] = useState(false);
  const handleOpenCartList = () => setOpenCartList(true);
  const handleCloseCartList = () => setOpenCartList(false);
  const deleteCartListItem = (itemId) => {
    console.log("hello");
    console.log(itemId);
    for (let i = 0; i < cartListItems.length; i++) {
      if (cartListItems[i].id === itemId) {
        cartListItems.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("Cart", JSON.stringify(cartListItems));
    setCartListItems([...cartListItems]);
    funcChange();
  };

  const [cookie, setCookie, removeCookie] = useCookies();
  const logout = () => {
    removeCookie("token");
    removeCookie("name");
  };

  return (
    <>
      <nav className={style.navigation}>
        <div className={style.featuresItems}>
          <a href="/">matter</a>
          <a href="/shop">shop</a>
          <a href="/product">fabric</a>
          <a href="/">journal</a>
          <a href="/">about</a>
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
            {wishListItems?.length > 0 ? (
              <span>{wishListItems.length}</span>
            ) : (
              <></>
            )}
          </i>
          <i
            className={`fa-solid fa-bag-shopping ` + style.cartList}
            onClick={handleOpenCartList}
          >
            {cartListItems?.length > 0 ? (
              <span>{cartListItems.length}</span>
            ) : (
              <></>
            )}
          </i>
        </div>
      </nav>
      <div>
        <WishListBar
          items={wishListItems}
          open={openWishList}
          handleClose={handleCloseWishList}
          deleteItem={deleteWishListItem}
        />
        <CartBar
          items={cartListItems}
          open={openCartList}
          handleClose={handleCloseCartList}
          deleteItem={deleteCartListItem}
        />
      </div>
    </>
  );
};

export default NavBar;
