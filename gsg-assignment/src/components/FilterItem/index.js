import React, {useState} from 'react';
import style from "./style.module.css";
const FilterItem = (props) => {
    const [isActive,setActive] = useState(false);
    const func = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setActive(!isActive);
    }
    return (
    <>
        <section className={style.filterItem} onClick={(e)=>func(e)}>
            <div>{props.text}</div>
            <div className={isActive ? style.triangle_down1: style.triangle_up1}></div>
        </section>
        <div>
            {isActive? props.children:<></>}
        </div>
    </>
    )
}

export default FilterItem;