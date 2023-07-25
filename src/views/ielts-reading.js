import React, { useState, useEffect, useRef } from 'react'
import MobNav from '../components/mob_nav'
import Header from '../components/header'

import Footer from '../components/footer'
import ReadingSection from '../components/reading_section'

const IeltsReading = (props) => {


    return (
        <>
            <MobNav></MobNav>
            <Header></Header>
            <ReadingSection></ReadingSection>
            <Footer></Footer>
        </>
    )
}

export default IeltsReading