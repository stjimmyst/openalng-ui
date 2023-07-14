import React, { useState, useEffect, useRef } from 'react'
import MobNav from '../components/MobNav/MobNav'
import Header from '../components/Header/Header'
import IntroSection from '../components/IntroSection/IntroSection'
import WritingSection from '../components/WritingSection/WritingSection'
import SpeakingSection from '../components/SpeakingSection/SpeakingSection'
import Prices from '../components/Prices/Prices'
import Footer from '../components/Footer/Footer'

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