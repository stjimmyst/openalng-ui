import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/header/header'
import IntroSection from '../components/intro_section/intro_section'
import WritingSection from '../components/writing_section/writing_section'
import SpeakingSection from '../components/speaking_section/speaking_section'
import Prices from '../components/prices/prices'
import Footer from '../components/footer/footer'

const Home = (props) => {
    const ref = useRef(null);
    const priceRef = useRef(null);

    function handleClick() {
        ref.current.focus();
    }

    return (
        <>
            {/* <MobNav></MobNav> */}
            <Header ref={ref}></Header>
            <main class="main">
                <IntroSection></IntroSection>
                <WritingSection></WritingSection>
                <SpeakingSection></SpeakingSection>
                <Prices ref={ref}></Prices>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home