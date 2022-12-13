import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import FilterItem from "../FilterItem";
import FilterSubItem from "../FilterSubItem";
import ActiveButtons from "../ActiveButtons";
import FilterGallery from "../SharedComponents/FilterGallery";
import SortingMenu from "../SortingMenu";
// import myData from "../../cardsData"
const myData = [
  {
    imgPath: "img14.png",
    isNew: true,
    category: "Pants",
    assets: true,
    price: 500,
  },
  {
    imgPath: "img2.png",
    isNew: true,
    category: "JumpSuits",
    assets: true,
    price: 220,
  },
  {
    imgPath: "img3.png",
    isNew: true,
    category: "SHORTS",
    assets: true,
    price: 295,
  },
  {
    imgPath: "img.png",
    isNew: false,
    category: "TOPS",
    assets: true,
    price: 300,
  },
  {
    imgPath: "img4.png",
    isNew: true,
    category: "TOPS",
    assets: true,
    price: 95,
  },
  {
    imgPath: "img6.png",
    isNew: false,
    category: "JumpSuits",
    assets: true,
    price: 150,
  },
  {
    imgPath: "img7.png",
    isNew: true,
    category: "SHORTS",
    assets: true,
    price: 520,
  },
  {
    imgPath: "img8.png",
    isNew: false,
    category: "Pants",
    assets: true,
    price: 155,
  },
  {
    imgPath: "img8.png",
    isNew: false,
    category: "Pants",
    assets: true,
    price: 85,
  },
];

const filters = [
  { header: "Apparels", subItems: ["pants", "Jumpsuits", "Shorts", "Tops"] },
  {
    header: "Accessories",
    subItems: ["jewelery", "men's clothing", "women's clothing", "electronics"],
  },
  { header: "Houseware" },
  { header: "Others" },
  { header: "Techniques" },
  { header: "Styles" },
];
const Filter = () => {
  const [filterSelected, setFilterSelected] = useState(null);
  const [filteredCards, setFilteredCards] = useState([]);
  const [cardsFeatured, setCardsFeatured] = useState([]);
  const [currentOption, setCurrentOption] = useState("nothing");

  const handleOptionChange = (event) => {
    setCurrentOption(event.target.value.toLowerCase());
  };

  const formatData = (json) => {
    const clearData = json.map((card) => ({
      imgPath: card.image,
      isNew: false,
      category: card.category,
      description: card.description,
      price: card.price,
    }));
    return clearData;
  };
  useEffect(() => {
    fetch("https://api.npoint.io/f4c96afe23343d3eb102")
      .then((res) => res.json())
      .then((json) => setCardsFeatured([...myData, ...formatData(json)]));
  }, []);

  useEffect(() => {
    const selectedData = cardsFeatured.filter(
      (card) =>
        !filterSelected || card.category.toLowerCase() === filterSelected
    );
    if(currentOption.toLowerCase() === "nothing")
    {
      setFilteredCards(selectedData);
    }
    else
    {
        setFilteredCards([...selectedData.sort((a, b) => a.price - b.price)]);
    }
  }, [filterSelected, cardsFeatured, currentOption]);

  const restFilter = () => {
    
    setFilterSelected(null);
  };
  const handleFilter = (e, text) => {
    setFilterSelected(text);
  };
  return (
    <>
    
    <SortingMenu handleOptionChange={handleOptionChange} />
      <div className={style.mainWrapper}>
        <section className={style.filterWrapper}>
          <div>
            <div>FILTERS</div>
            <button onClick={restFilter}>RESET</button>
          </div>
          <div className={style.listOfFilters}>
            {filters.map((obj, index) => (
              <FilterItem key={index} text={obj.header}>
                {filters[index].subItems?.map((obj, idx) => (
                  <FilterSubItem
                    key={idx}
                    func={handleFilter}
                    text={obj.toLowerCase()}
                  />
                ))}
              </FilterItem>
            ))}
          </div>
          <ActiveButtons />
          <div>SEE OUR SIZING GUIDE</div>
        </section>
        <FilterGallery cards={filteredCards}/>
      </div>
    </>
  );
};

export default Filter;
