import React, { useEffect, useState } from 'react'
import style from "./style.module.css";
import FilterItem from "../FilterItem";
import FilterSubItem from '../FilterSubItem';
import ActiveButtons from "../ActiveButtons";
import FilterGallery from "../SharedComponents/FilterGallery";
const cardsFeatured = [
  { imgPath: "img14.png", isNew: true,category :"Pants"},
  { imgPath: "img2.png", isNew: true ,category :"JumpSuits"},
  { imgPath: "img3.png", isNew: true ,category :"SHORTS"},
  { imgPath: "img.png", isNew: false ,category :"TOPS"},
  { imgPath: "img4.png", isNew: true ,category :"TOPS"},
  { imgPath: "img6.png", isNew: false ,category :"JumpSuits"},
  { imgPath: "img7.png", isNew: true ,category :"SHORTS"},
  { imgPath: "img8.png", isNew: false ,category :"Pants"},
  { imgPath: "img8.png", isNew: false ,category :"Pants"},
];

const filters = [{'header':"Apparels","subItems":["pants","Jumpsuits","Shorts","Tops"]},{'header':"Accessories","subItems":["pants","Jumpsuits","Shorts","Tops"]},{'header':"Houseware"},{'header':"Others"},{'header':"Techniques"},{'header':"Styles"}];
const Filter = () => {
  const [filterSelected, setFilterSelected] = useState(null);
  const [filteredCards,setFilteredCards] = useState(cardsFeatured);
  useEffect(()=>{
    // console.log("the filter selected is ", filterSelected)
    const selectedData = cardsFeatured.filter((card)=>(
      !filterSelected || card.category.toLowerCase() === filterSelected 
    ))
    setFilteredCards(selectedData);
  },[filterSelected])

  const restFilter = ()=>{
    setFilterSelected(null);
    // console.log("Reset all things");
  }
  const handleFilter = (e,text)=>{
    setFilterSelected(text);
  }
  return (
    <>
    <div className={style.mainWrapper}>
      <section className={style.filterWrapper}>
          <div>
              <div>FILTERS</div>
              <button onClick= {restFilter}>RESET</button>
          </div>
          <div className={style.listOfFilters}>
            {filters.map((obj,index)=>(
                <FilterItem key={index} text={obj.header}>
                    {
                        filters[index].subItems?.map((obj,idx)=>(
                          <FilterSubItem key={idx}  func={handleFilter} text={obj.toLowerCase()}/>
                        ))
                        
                    }
                </FilterItem>
                )
            )
            }
          </div>
          <ActiveButtons/>
          <div>SEE OUR SIZING GUIDE</div>
      </section>
      <FilterGallery cards={filteredCards}/>
    </div>
    </>
  )
}

export default Filter;