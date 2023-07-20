import React, { useState, useEffect, useRef } from 'react'
import MobNav from '../components/mob_nav'
import Header from '../components/header'

import Footer from '../components/footer'

const WritingGeneral = (props) => {


    return (
        <>
            <MobNav></MobNav>
            <Header></Header>
            <main className="main">
                <section className="sec-info recommend-sec sec-info_active">
                    <div className="container-info">
                        {/* <div className="title-row">
                            <h1 className="main-title title-row__title">
                                English
                            </h1>
                        </div> */}
                        
                        <div className="sec-info__elements-wrapper">
                            <div className="sec-info__element only-login-user">
                                <div className="sec-info__left">
                                    {/* <h3 className="sec-info__title-element">CELPIP</h3> */}
                                    <div className="how-it-work__element">
                                        <img src="img/_src/ielts-general.png" alt="" className="how-it-work__icon" />
                                        {/* <h3 className="how-it-work__title">Get Writing topic</h3> */}
                                    </div>
                                </div>

                                <div className="sec-info__rignt">


                                    <p className="sec-info__text-element">The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language. This includes countries such as Australia, Canada, New Zealand, the UK and USA. </p>
                                    <br />
                                    <p className="sec-info__text-element">Your ability to listen, read, write and speak in English will be assessed during the test. IELTS is graded on a scale of 1-9. </p>
                                    <br />
                                    <br />
                                    <p className="sec-info__text-element">Total time for IELTS Speaking part: ~ 60 minutes</p>
                                    <br />
                                    <p className="sec-info__text-element">There are 4 main criterias in the IELTS Writing:</p>
                                    <br/>
                                    <p className="sec-info__text-element">- Task achievement/response</p>
                                    <p className="sec-info__text-element">- Coherence and cohesion</p>
                                    <p className="sec-info__text-element">- Lexical resource</p>
                                    <p className="sec-info__text-element">- Grammatical range and accuracy</p>
                                    <br />
                                    <br />
                                    <a href="https://www.ielts.org/for-test-takers/test-format">More info on the official website</a>
                                    <div class="btn-row front-sec__btn-row">
                                        <a class="btnV2" href='/writing_ielts'>Practice</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sec-info__elements-wrapper">
                            <div className="sec-info__element only-login-user">
                                <div className="sec-info__left">
                                    {/* <h3 className="sec-info__title-element">CELPIP</h3> */}
                                    <div className="how-it-work__element">
                                        <img src="img/_src/celpip-logo.png" alt="" className="how-it-work__icon" />
                                        {/* <h3 className="how-it-work__title">Get Writing topic</h3> */}
                                    </div>
                                </div>

                                <div className="sec-info__rignt">


                                    <p className="sec-info__text-element">The CELPIP – General evaluates test taker’s English listening, reading, writing, and speaking skills and is officially designated for permanent residence applications by Immigration, Refugees and Citizenship Canada (IRCC), and is also accepted for professional designations.</p>
                                    <br />
                                    <br />
                                    <p className="sec-info__text-element">Total time for CELPIP Writing part: ~ 53-60 minutes</p>
                                    <br />
                                    <p className="sec-info__text-element">There are 4 main criterias in the CELPIP:</p>
                                    <br/>
                                    <p className="sec-info__text-element">- Content/Coherence</p>
                                    <p className="sec-info__text-element">- Vocabulary</p>
                                    <p className="sec-info__text-element">- Readability</p>
                                    <p className="sec-info__text-element">- Task Fuilfillment</p>
                                    <br />
                                    <br />
                                    <a href="https://www.celpip.ca/celpip-general/">More info on the official website</a>
                                    <div class="btn-row front-sec__btn-row">
                                        <a class="btnV2" href='/writing_celpip'>Practice</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sec-info__elements-wrapper">
                            <div className="sec-info__element only-login-user">
                                <div className="sec-info__left">
                                    {/* <h3 className="sec-info__title-element">CELPIP</h3> */}
                                    <div className="how-it-work__element">
                                        <img src="img/_src/ielts-academic.png" alt="" className="how-it-work__icon" />
                                        {/* <h3 className="how-it-work__title">Get Writing topic</h3> */}
                                    </div>
                                </div>

                                <div className="sec-info__rignt">


                                    <p className="sec-info__text-element">The International English Language Testing System (IELTS) is designed to help you work, study or migrate to a country where English is the native language. This includes countries such as Australia, Canada, New Zealand, the UK and USA. </p>
                                    <br />
                                    <p className="sec-info__text-element">Your ability to listen, read, write and speak in English will be assessed during the test. IELTS is graded on a scale of 1-9. </p>
                                    <br />
                                    <br />
                                    <p className="sec-info__text-element">Total time for IELTS Writing part: ~ 60 minutes</p>
                                    <br />
                                    <p className="sec-info__text-element">There are 4 main criterias in the IELTS Writing:</p>
                                    <br/>
                                    <p className="sec-info__text-element">- Task achievement/response</p>
                                    <p className="sec-info__text-element">- Coherence and cohesion</p>
                                    <p className="sec-info__text-element">- Lexical resource</p>
                                    <p className="sec-info__text-element">- Grammatical range and accuracy</p>
                                    <br />
                                    <br />
                                    <a href="https://www.ielts.org/for-test-takers/test-format">More info on the official website</a>
                                    <div class="btn-row front-sec__btn-row">
                                        <p class="btnV2" >Coming soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default WritingGeneral