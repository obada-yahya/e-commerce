import React, {useState}from 'react'
import style from "./style.module.css"
import SizeBtn from "../SharedComponents/SizeBtn";


const SizesBtn = (props) => {
  const [selectedBox,setSelectedBox] = useState(0);
  const [num,setNumber] = useState(1);
  const updatedBox = (e,idx)=>{
      e.preventDefault();
      setSelectedBox(idx);
  }
  const numbers = [1,2,3,4];  
  return (
    <div className={style.sizeContainer}>
          <div>Sizes</div>
          <div className={style.centerSizes}>
              <div className={style.buttons}>
                  {numbers.map((value,idx)=>(
                      <SizeBtn key={idx} isActive={selectedBox == idx ? true: false} func={(e)=>updatedBox(e,idx)} value={value}/>
                  ))}
                  {props.children}
              </div>
          </div>
    </div>
  )
}

export default SizesBtn;