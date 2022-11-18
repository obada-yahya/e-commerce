import React from 'react'
import AdBar from '../../components/AdBar';
import Filter from "../../components/Filter";
import NavBar from '../../components/NavBar';
import HeaderIntro from '../../components/HeaderIntro';
import Footer from '../../components/Footer';
const index = () => {
  return (
    <>
    <AdBar/>
    <NavBar/>
    <HeaderIntro/>
    <Filter/>
    <Footer/>
    </>
  )
}

export default index