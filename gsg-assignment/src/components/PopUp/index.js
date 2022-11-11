import React,{useState} from "react"
import style from "./style.module.css"
import ActiveButtons from "../ActiveButtons";
const PopUp = ({closeFunc,product})=>{
    // const [selectedBox,setSelectedBox] = useState(0);
    const [num,setNumber] = useState(1);
    // const updatedBox = (e,idx)=>{
    //     e.preventDefault();
    //     setSelectedBox(idx);
    // }
    const numbers = [1,2,3,4];    
    return (
        <div className={style.popupBox}>
            <div className={style.box}>
                <button onClick={closeFunc} className={style.btnClose}>X</button>
                {product.title}
                <div className={style.info}>
                <section className={style.imageContainer}>
                    {
                        product.images.map((source,idx)=>(
                            <img src={source} key={idx}/>
                        ))
                    }
                </section>
                <section className={style.mainImage}>
                    <img src={product.thumbnail}/>
                </section>
                <section className={style.imgDescription}>
                    <div>
                        <header>
                            <h1>{product.title}</h1>
                            <div className={style.flexSpaceBetween}>
                                <div className={style.price}>US {product.price}</div>
                                <div>
                                    <div className={style.rating}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <span> {product.rating} of 5</span>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </div>
                    <div className={style.description}>
                        <h4>Description</h4>
                        <div>{product.description}</div>
                    </div>
                    <div className={style.test}>
                        <div>Brand</div>
                        <div>{product.brand}</div>
                    </div>
                    <div className={style.test}>
                        <div>category</div>
                        <div>{product.category}</div>
                    </div>
                    <div className={style.test}>
                        <div>stock</div>
                        <div>{product.stock}</div>
                    </div>
                    <ActiveButtons><div>Size Guidelines</div></ActiveButtons>
                    Quantity
                    <section className={style.purchaseContainer}>
                        <button className={style.incBtn} onClick={()=> num > 1 ? setNumber(num - 1): null}>-</button>
                        <div className={style.numberContainer}>{num}</div>
                        <button className={style.incBtn} onClick={()=>setNumber(num + 1)}>+</button>
                        <button className={style.buttonContent}>Add to cart</button>
                    </section>
                </section>
                </div>
            </div>
            
        </div>
    )
    
}
export default PopUp;

