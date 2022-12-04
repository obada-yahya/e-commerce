import React, { useState } from "react";
import style from "./style.module.css";
import ActiveButtons from "../ActiveButtons";
const PopUp = ({ closeFunc, product }) => {
  const [num, setNumber] = useState(1);
  const [selectedPicture, setSelectedPicture] = useState(product.images[0]);
  return (
    <div className={style.popupBox}>
      <div className={style.box}>
        <button onClick={closeFunc} className={style.btnClose}>
          X
        </button>
        {product.title}
        <div className={style.info}>
          <section className={style.imageContainer}>
            {product.images.map((source, idx) => (
              <img
                onClick={(e) => setSelectedPicture(source)}
                src={source}
                key={idx}
                alt="Product Pictures"
              />
            ))}
          </section>
          <section className={style.mainImage}>
            <img src={selectedPicture} alt="Product thumbnail" />
          </section>
          <section className={style.imgDescription}>
            <div>
              <header>
                <h1>{product.title}</h1>
                <div className={style.flexSpaceBetween}>
                  <div className={style.price}>US {product.price}</div>
                  <div>
                    <div className={style.rating}>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <span> {product.rating} of 5</span>
                    </div>
                  </div>
                </div>
              </header>
            </div>
            <div className={style.description}>
              <h4>Description</h4>
              <div>{product.description}</div>
            </div>
            <div className={style.test}>
              <div>Brand</div>
              <div>{product.brand}</div>
            </div>
            <div className={style.test}>
              <div>category</div>
              <div>{product.category}</div>
            </div>
            <div className={style.test}>
              <div>stock</div>
              <div>{product.stock}</div>
            </div>
            <ActiveButtons>
              <div>Size Guidelines</div>
            </ActiveButtons>
            <h5>Quantity</h5>
            <button className={style.wishList}>View Full Product Details</button>
            <section className={style.purchaseContainer}>
              <button
                className={style.incBtn}
                onClick={() => (num > 1 ? setNumber(num - 1) : null)}
              >
                -
              </button>
              <div className={style.numberContainer}>{num}</div>
              <button
                className={style.incBtn}
                onClick={() => setNumber(num + 1)}
              >
                +
              </button>
              <button className={style.buttonContent}>Add to cart</button>
              <button className={style.buttonContent}>Add To WishList</button>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};
export default PopUp;
