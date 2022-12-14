import React from "react";
import WishListItem from "../WishListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import style from "./style.module.css";
import CartItem from "../CartItem";
const styleCart = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const CardBar = ({ items, open, handleClose, deleteItem }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleCart}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className={style.table}>
            <section className={style.header}>
              <span>Product</span>
              <span>Price</span>
              <span>Rating</span>
              <span className={style.center}>quantity</span>
            </section>
            {items?.map((item, idx) => (
                <CartItem key={idx} {...item} deleteItem={deleteItem} />
            ))}
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
      </Box>
    </Modal>
  );
};

export default CardBar;
