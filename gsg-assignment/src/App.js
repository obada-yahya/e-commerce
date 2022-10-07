import logo from './logo.svg';
import './App.css';
import AdBar from './components/AdBar';
import NavBar from './components/NavBar';
import HeaderIntro from './components/HeaderIntro';
import Title from './components/SharedComponents/Title'
import Gallary from './components/SharedComponents/Gallary';
import MatterInfo from './components/MatterInfo';
import Footer from './components/Footer';

const cardsFeatured = [
{imgPath:"img14.png",isNew:true},
{imgPath:"img2.png",isNew:true},
{imgPath:"img3.png",isNew:true},
{imgPath:"img.png",isNew:false},
{imgPath:"img4.png",isNew:true},
{imgPath:"img6.png",isNew:false},
{imgPath:"img7.png",isNew:true},
{imgPath:"img8.png",isNew:false}]
const cardsShop = [
  {imgPath:"img11.png",isNew:false,category:"Pants"},
  {imgPath:"img9.png",isNew:false,category:"Jumpsuits"},
  {imgPath:"img12.png",isNew:false,category:"Tops"},
  {imgPath:"img13.png",isNew:false,category:"Accessories"}
]
const videos = ["rec1.png","rec2.png","rec3.png"]
function App() {
  return (
    <>    
    <AdBar/>
    <NavBar/>
    <HeaderIntro/>
    <Title Text={"Featured"}/>
    <Gallary cards={cardsFeatured} isCard={true} isShop={false}/>
    <Title Text={"About Matter"}/>
    <MatterInfo/>
    
    <Title Text={"Explor"}/>

    <Title Text={"Shop"}/>
    <Gallary cards={cardsShop} isCard={true} isShop={true}/>
    
    <Title Text={"Recommended Videos"}/>
    <Gallary cards={videos} isCard={false}/>
    <Title Text={"As Seen on"}/>
    <div class="align" >
      <img src='/images/asseenon.png'/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
