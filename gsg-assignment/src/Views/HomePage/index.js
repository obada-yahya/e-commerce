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
import cardsFeatured from "../../cardsData";
import cardsShop from "../../cardsShop";
const videos = ["rec1.png", "rec2.png", "rec3.png"];
const HomePage = () => {
  const [open, setToggle] = useState(false);
  const [product, setProduct] = useState(null);
  const openToggle = (e, card) => {
    let html = document.querySelector("html");
    if (!open) {
      html.style.height = "100%";
      html.style.overflow = "hidden";
    } else {
      html.style = "";
    }
    setToggle(!open);
    setProduct(card);
  };
  return (
    <div>
      <AdBar />
      <NavBar changed={open} />
      <HeaderIntro />
      {open && <PopUp closeFunc={openToggle} product={product} />}
      <Title Text={"Featured"} />
      <Gallery
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
  );
};

export default HomePage;
