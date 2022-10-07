import logo from './logo.svg';
import './App.css';
import AdBar from './components/AdBar';
import NavBar from './components/NavBar';
import HeaderIntro from './components/HeaderIntro';
import Title from './components/SharedComponents/Title'
import Gallary from './components/SharedComponents/Gallary';
import MatterInfo from './components/MatterInfo';
const cardsFeatured = ["img14.png","img2.png","img3.png","img10.png","img4.png","img6.png","img7.png","img8.png"]
const cardsShop = ["img11.png","img9.png","img12.png","img13.png"]
const videos = ["rec1.png","rec2.png","rec3.png"]
function App() {
  return (
    <>    
    <AdBar/>
    <NavBar/>
    <HeaderIntro/>
    <Title Text={"Featured"}/>
    <Gallary cards={cardsFeatured} isCard={true}/>
    <Title Text={"About Matter"}/>
    <MatterInfo/>
    <Title Text={"Shop"}/>
    <Gallary cards={cardsShop} isCard={true}/>
    <Title Text={"Recommended Videos"}/>
    <Gallary cards={videos} isCard={false}/>
    <Title Text={"As Seen on"}/>
    <div class="align" >
      <img src='/images/asseenon.png'/>
    </div>
    
    </>
  );
}

export default App;
