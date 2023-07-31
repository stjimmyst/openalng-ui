import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/header.js'
import IntroSection from '../components/intro_section'
import WritingSection from '../components/writing_section'
import SpeakingSection from '../components/speaking_section'
import ReadingSection from './reading_section.js'
import Prices from '../components/prices'
import Footer from '../components/footer'
import MobNav from '../components/mob_nav'

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
                <ReadingSection></ReadingSection>
                <Prices ref={ref}></Prices>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Home