import logo from './logo.svg';
import './App.css';
import AdBar from './components/AdBar';
import NavBar from './components/NavBar';
import HeaderIntro from './components/HeaderIntro';
import Title from './components/SharedComponents/Title'
import Gallary from './components/SharedComponents/Gallary';
import Card from './components/SharedComponents/Card';
const cards = ["img14.png","img2.png","img3.png","img10.png","img4.png","img6.png","img7.png","img8.png"]
function App() {
  return (
    <>    
    <AdBar/>
    <NavBar/>
    <HeaderIntro/>
    <Title Text={"Featured"}/>
    <Gallary cards={cards}/>
    {/* <Card/> */}
    </>
  );
}

export default App;
