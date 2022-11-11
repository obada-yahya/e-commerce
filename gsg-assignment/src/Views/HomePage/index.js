import { useState } from "react";
import AdBar from "../../components/AdBar";
import NavBar from "../../components/NavBar";
import HeaderIntro from "../../components/HeaderIntro";
import Title from "../../components/SharedComponents/Title";
import Gallery from "../../components/SharedComponents/Gallery";
import MatterInfo from "../../components/MatterInfo";
import Footer from "../../components/Footer";
import GridExplore from "../../components/GridExplore";
import Button from "../../components/SharedComponents/Button";
import Sponsors from "../../components/Sponsors";
import PopUp from "../../components/PopUp";
import products from "../../productsData";
const cardsFeatured = [
  { imgPath: "img14.png", isNew: true },
  { imgPath: "img2.png", isNew: true },
  { imgPath: "img3.png", isNew: true },
  { imgPath: "img.png", isNew: false },
  { imgPath: "img4.png", isNew: true },
  { imgPath: "img6.png", isNew: false },
  { imgPath: "img7.png", isNew: true },
  { imgPath: "img8.png", isNew: false },
];
const cardsShop = [
  { imgPath: "img11.png", isNew: false, category: "Pants" },
  { imgPath: "img9.png", isNew: false, category: "Jumpsuits" },
  { imgPath: "img12.png", isNew: false, category: "Tops" },
  { imgPath: "img13.png", isNew: false, category: "Accessories" },
];
const videos = ["rec1.png", "rec2.png", "rec3.png"];

const HomePage = () => {
    const [open, setToggle] = useState(false);
    const openToggle = (e) => {
      setToggle(!open);
    };
   return (
    <div className>
      <AdBar />
      <NavBar />
      <HeaderIntro />
      {open && <PopUp closeFunc={openToggle} product={products[0]} />}
      <Title Text={"Featured"} />
      <Gallery
        ary
        cards={cardsFeatured}
        func={openToggle}
        isCard={true}
        isShop={false}
      />
      <Title Text={"About Matter"} />
      <MatterInfo />

      <Title Text={"Explore"} />
      <GridExplore />
      <Button text={"see the journal"} />

      <Title Text={"Shop"} />
      <Gallery
        cards={cardsShop}
        func={openToggle}
        isCard={true}
        isShop={true}
      />
      <Title Text={"Recommended Videos"} />
      <Gallery cards={videos} isCard={false} />
      <Button text={"show more"} />
      <Title Text={"As Seen on"} />
      <Sponsors />
      <Footer />
    </div>  
  )
}

export default HomePage