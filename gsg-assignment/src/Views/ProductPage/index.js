import React from "react";
import AdBar from "../../components/AdBar";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Title from "../../components/SharedComponents/Title";
import Gallery from "../../components/SharedComponents/Gallery";
import style from "./style.module.css";
// import Image from "public/WomensWorking.png";
const index = () => {
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
      <div className={style.reviewImg}>
      </div>
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

export default index;
