import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BannerComponent from './components/BannerComponent';
import FooterComponent from './components/Footer';
import AboutComponent from './components/AboutComponent';
import PeopleComponent from './components/PeopleComponent';
import PublicationComponent from './components/PublicationComponent';

function App() {
  return (
    <>
    
      <HeaderComponent/>
      <BannerComponent type = "jumbo" src={"jumbotronimage.JPG"}/>
      <AboutComponent/>
      <BannerComponent type = "imgdiv" type = "imgdiv" src={"image4.png"}/>
      <PeopleComponent/>
      <BannerComponent type = "imgdiv" src={"image3.png"}/>
      <PublicationComponent/>
      <BannerComponent type = "imgdiv" src={"image2.png"}/>
      <FooterComponent/>
      
    
    </>
  );
}

export default App;
