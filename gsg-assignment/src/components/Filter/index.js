import React from 'react'
import style from "./style.module.css";
import FilterItem from "../FilterItem";
import FilterSubItem from '../FilterSubItem';
import ActiveButtons from "../ActiveButtons";
import Button from "../SharedComponents/Button"
import FilterGallery from "../SharedComponents/FilterGallery";

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
const filters = [{'header':"Apparels","subItems":["pants","Jumpsuits","Shorts","Tops"]},{'header':"Accessories","subItems":["pants","Jumpsuits","Shorts","Tops"]},{'header':"Houseware"},{'header':"Others"},{'header':"Techniques"},{'header':"Styles"}];
const index = () => {
  const func = ()=>{
    console.log("Reset all things");
  }
  return (
    <>
    <div className={style.mainWrapper}>
      <section className={style.filterWrapper}>
          <div>
              <div>FILTERS</div>
              <button onClick={func}>RESET</button>
          </div>
          <div className={style.listOfFilters}>
            {filters.map((obj,index)=>(
                <FilterItem key={index} text={obj.header}>
                    {
                        filters[index].subItems?.map((obj)=>(
                          <FilterSubItem text={obj}/>  
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
      <FilterGallery cards={cardsFeatured}/>
    </div>
    </>
  )
}

export default index;