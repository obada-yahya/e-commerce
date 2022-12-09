import React from "react";
import style from "./style.module.css";
import Card from "../Card";
import Video from "../../Video";
const Gallery = ({ cards, isCard, isShop, func }) => {
  // console.log("isCard",isCard);
  return (
    <div className={style.Gallery}>
      {cards ? (
        cards.map((card, idx) =>
          isCard ? (
            <Card
              key={idx}
              func={func}
              card={card}
              isNew={card.isNew}
              isShop={isShop}
            />
          ) : (
            <Video key={card} vid={card} />
          )
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Gallery;
