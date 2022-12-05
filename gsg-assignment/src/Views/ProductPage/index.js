import React, { useState } from "react";
import AdBar from "../../components/AdBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Title from "../../components/SharedComponents/Title";
import Gallery from "../../components/SharedComponents/Gallery";
import style from "./style.module.css";
import products from "../../productsData";
import ActiveButtons from "../../components/ActiveButtons";

const product = products[1];
const ProdcutPage = () => {
  const [num, setNumber] = useState(1);
  const [selectedPicture, setSelectedPicture] = useState(product.images[0]);
  const cardsFeatured = [
    { imgPath: "img14.png", isNew: true, assets: true, price: 120 },
    { imgPath: "img2.png", isNew: true, assets: true, price: 120 },
    { imgPath: "img3.png", isNew: true, assets: true, price: 250 },
    { imgPath: "img8.png", isNew: false, assets: true, price: 180 },
  ];
  return (
    <>
      <AdBar />
      <NavBar />
      {/* this is the begin */}

      <div className={style.popupBox}>
        <div className={style.box}>
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

              <button className={`${style.wishList} ${style.buttonContent}`}>
                View Full Product Details
              </button>
            </section>
          </div>
        </div>
      </div>

      {/* this is the end  */}
      <div className={style.reviewImg}></div>
      <div className={style.picturesCaptions}>
        <div>
          <img src={"images/Women2.png"} />
          <div>Lorem Ipsum dolor sit amet</div>
        </div>
        <div>
          <img src={"images/Women3.png"} />
          <div>Lorem Ipsum dolor sit amet</div>
        </div>
        <div>
          <img src={"images/Women1.png"} />
          <div>Lorem Ipsum dolor sit amet</div>
        </div>
      </div>

      <Title Text={"As Seen On Instagram"} />
      <div className={style.pictures}>
        <img src={"images/womensWorking5.png"} />
        <img src={"images/womensWorking2.png"} />
        <img src={"images/womensWorking1.png"} />
        <img src={"images/womensWorking4.png"} />
      </div>
      <Title Text={"You May Also Like"} />
      <Gallery cards={cardsFeatured} isCard={true} isShop={false} />
      <Footer />
    </>
  );
};

export default ProdcutPage;
