import React from 'react'
import style from "./style.module.css";
import FilterItem from "../FilterItem";
import FilterSubItem from '../FilterSubItem';
import ActiveButtons from "../ActiveButtons";
import Button from "../SharedComponents/Button"
const filters = [{'header':"Apparels","subItems":["pants","Jumpsuits","Shorts","Tops"]},{'header':"Accessories","subItems":["pants","Jumpsuits","Shorts","Tops"]},{'header':"Houseware"},{'header':"Others"},{'header':"Techniques"},{'header':"Styles"}];
const index = () => {
  const func = ()=>{
    console.log("Reset all things");
  }
  return (
    <>
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
    </>
  )
}

export default index;