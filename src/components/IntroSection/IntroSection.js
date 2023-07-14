import React, { useState, useEffect, useRef } from 'react'

import { scrollElement } from '../functions'

const IntroSection = (props) => {
return (
    <section class="front-sec">
        <div className="container">
					<div className="title-row">
						<h2 className="main-title title-row__title">OpenLang: Open World</h2>
					</div>
					<p className="main-description how-it-work__description">
                    Prepare yourself for any official language test
					</p>
					<div className="how-it-work__row">
						<div className="how-it-work__element">
							<img src="img/_src/ielts-logo.png" alt="" className="how-it-work__icon"/>
							{/* <h3 className="how-it-work__title">Get Writing topic</h3> */}
						</div>
						{/* <div className="how-it-work__element">
							<img src="img/_src/h2.png" alt="" className="how-it-work__icon"/>
							<h3 className="how-it-work__title">Type your essay
							</h3>
						</div> */}
						{/* <div className="how-it-work__element">
							<img src="img/_src/h3.png" alt="" className="how-it-work__icon"/>
							<h3 className="how-it-work__title">Get your score!
							</h3>
						</div> */}
					</div>
					<div class="btn-row front-sec__btn-row">
						<a class="btnV2" onClick={()=>{scrollElement("WritingSection")}}>Get more</a>
					</div>
				</div>
				{/* <div class="container">
					<div class="title-row">
						<h1 class="main-title title-row__title">OpenLang: Open World
						</h1>
						<div class="title-row__right">
							<img src="img/_src/img1.png" alt="" class="title-row__img"/>
						</div>
					</div>
					<p class="main-description front-sec__description">Prepare yourself for any official language test
					</p>
					<div class="btn-row front-sec__btn-row">
						<a href="#writting" class="btnV2">Get more</a>
					</div>
				</div> */}
			</section>
)

}

export default IntroSection