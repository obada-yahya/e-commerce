import React, { useEffect, useState } from "react";
import AdBar from "../../components/AdBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Title from "../../components/SharedComponents/Title";
import Gallery from "../../components/SharedComponents/Gallery";
import style from "./style.module.css";
import ActiveButtons from "../../components/ActiveButtons";
import cardsData from "../../cardsData";
import { useParams } from "react-router-dom";
const cardsFeatured = [
  { imgPath: "img14.png", isNew: true, assets: true, price: 120 },
  { imgPath: "img2.png", isNew: true, assets: true, price: 120 },
  { imgPath: "img3.png", isNew: true, assets: true, price: 250 },
  { imgPath: "img8.png", isNew: false, assets: true, price: 180 },
];
const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(cardsData[0]);
  const [num, setNumber] = useState(1);
  const [changed, setChanged] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(
    cardsData[0].images[0].startsWith("http")
      ? cardsData[0].images[0]
      : `/images/${cardsData[0].images[0]}`
  );
  useEffect(() => {
    fetch("https://api.npoint.io/f4c96afe23343d3eb102")
      .then((res) => res.json())
      .then((json) => handleEffect([...json, ...cardsData]));
  }, []);

  const handleEffect = (data) => {
    let pd = -1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == productId) {
        pd = i;
        break;
      }
    }
    setSelectedPicture(
      data[pd].images[0].startsWith("http")
        ? data[pd].images[0]
        : `/images/${data[pd].images[0]}`
    );
    setProduct(data[pd]);
  };
  // starts from here
  const wishListItems = JSON.parse(localStorage.getItem("cards")) || [];
  const check = () => {
    for (let i = 0; i < wishListItems.length; i++) {
      if (
        wishListItems[i].rating +
          wishListItems[i].title +
          wishListItems[i].price ===
        product.rating + product.title + product.price
      ) {
        return true;
      }
    }
    return false;
  };
  const [isInWishList, setIsInWishList] = useState(check());
  const addWishListItem = (e) => {
    wishListItems.push({
      price: product.price,
      title: product.title,
      rating: product.rating,
    });
    localStorage.setItem("cards", JSON.stringify(wishListItems));
    setIsInWishList(true);
    setChanged(!changed);
  };
  const removeWishListItem = () => {
    for (let i = 0; i < wishListItems.length; i++) {
      if (
        wishListItems[i].rating +
          wishListItems[i].title +
          wishListItems[i].price ===
        product.rating + product.title + product.price
      ) {
        wishListItems.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cards", JSON.stringify(wishListItems));
    setIsInWishList(false);
    setChanged(!changed);
  };
  //ends here
  return (
    <>
      <AdBar />
      <NavBar changed={changed} funcChange={removeWishListItem} />
      <div className={style.popupBox}>
        <div className={style.box}>
          {product.title}
          <div className={style.info}>
            <section className={style.imageContainer}>
              {product.images.map((source, idx) => (
                <img
                  onClick={(e) =>
                    setSelectedPicture(
                      source.startsWith("http") ? source : `/images/${source}`
                    )
                  }
                  src={source.startsWith("http") ? source : `/images/${source}`}
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
                <button
                  className={style.buttonContent}
                  onClick={() =>
                    isInWishList ? removeWishListItem() : addWishListItem()
                  }
                >
                  {isInWishList ? "remove from WishList" : "Add To WishList"}
                </button>
              </section>
            </section>
          </div>
        </div>
      </div>

      {/* this is the end  */}
      <div className={style.reviewImg}></div>
      <div className={style.picturesCaptions}>
        <div>
          <img src={"../images/Women2.png"} />
          <div>Lorem Ipsum dolor sit amet</div>
        </div>
        <div>
          <img src={"../images/Women3.png"} />
          <div>Lorem Ipsum dolor sit amet</div>
        </div>
        <div>
          <img src={"../images/Women1.png"} />
          <div>Lorem Ipsum dolor sit amet</div>
        </div>
      </div>

      <Title Text={"As Seen On Instagram"} />
      <div className={style.pictures}>
        <img src={"../images/WomensWorking5.png"} />
        <img src={"../images/WomensWorking2.png"} />
        <img src={"../images/WomensWorking1.png"} />
        <img src={"../images/WomensWorking4.png"} />
      </div>
      <Title Text={"You May Also Like"} />
      <Gallery cards={cardsFeatured} isCard={true} isShop={false} />
      <Footer />
    </>
  );
};

export default ProductPage;
