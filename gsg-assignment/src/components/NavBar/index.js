import style from "./style.module.css";
import * as React from "react";
import { useState, useEffect } from "react";
import WishListItem from "../WishListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const styleSS = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const NavBar = ({ changed }) => {
  useEffect(()=>{
    setItems(JSON.parse(localStorage.getItem("cards")));
  },[changed])
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("cards")));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const deleteItem = (item)=>{
    for (let i = 0; i < items.length; i++) {
      if (
        items[i].rating +
          items[i].title +
          items[i].price === item
      )
      {items.splice(i,1);break;}
    }
    localStorage.setItem("cards",JSON.stringify(items));
    setItems([...items]);
  }
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
          <a href="#">login</a>
          <i className="fa-solid fa-magnifying-glass"></i>
          <i
            className={`fa-regular fa-heart ` + style.wishlist}
            onClick={handleOpen}
          >
            {items?.length > 0 ? <span>{items.length}</span> : <></>}
          </i>
          <i className="fa-solid fa-bag-shopping"></i>
        </div>
      </nav>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleSS}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Wish List Items ❤️
              <ul>
                {items?.map((item, idx) => (
                  <li key={idx}>
                    <WishListItem {...item} deleteItem = {deleteItem}/>
                  </li>
                ))}
              </ul>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default NavBar;
