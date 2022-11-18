import style from "./style.module.css"

const Title = ({Text})=>{
    return(
        <div className={style.centerText}>{Text}</div>
    );
}

export default Title;