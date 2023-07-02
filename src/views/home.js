import React, { useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import MenuComponent from '../components/menu-component'
import HomeHowItWorksWriting from '../components/home-how-it-works-writing'
import HomeHowItWorksSpeaking from '../components/home-how-it-works-speaking'
import './home.css'
import { GetUserName } from '../components/functions';
import Prices from '../components/prices'

const Home = (props) => {


  function scrollElement(inpname){
    if (inpname != null) {
    var element = document.getElementById(inpname);
    element.scrollIntoView();
    }
   }

  return (
    <div className="home-container">
      <Helmet>
        <title>OpenLang</title>
        <meta property="og:title" content="OpenLang" />
      </Helmet>
      <div className="home-menu-container menuecontainer">
        <MenuComponent rootClassName="menu-component-root-class-name2"></MenuComponent>
      </div>
      <div className="home-about-container">
        <div id="AboutHeader" className="home-container01 OlContainerContent">
          <div className="home-container02">
            <h1 className="container-header-text">OpenLang: Open World</h1>
          </div>
          <div className="home-container03">
            <h1 className="container-description-text">
              Prepare yourself for any official language test
            </h1>
          </div>
          <div className="home-container04">
            <img
              alt="image"
              src="/ielts-logo-200h.png"
              className="home-image"
            />
            <img
              alt="image"
              src="/celpip_logo_dark-200h.png"
              className="home-image1"
            />
          </div>
          <div className="home-container05">
            <button type="button" className="home-button button" onClick={()=>{scrollElement("WritingContainer")}}>
              GET MORE
            </button>
          </div>
        </div>
      </div>
      <HomeHowItWorksWriting rootClassName="home-how-it-works-writing-root-class-name"></HomeHowItWorksWriting>
      <HomeHowItWorksSpeaking rootClassName="home-how-it-works-speaking-root-class-name1"></HomeHowItWorksSpeaking>
      <Prices username={GetUserName()}></Prices>
      
    </div>
  )
}

export default Home
