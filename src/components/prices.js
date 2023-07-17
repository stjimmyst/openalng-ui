import React, { useState, useEffect, useRef } from 'react'

import { GetUserName } from './functions';

const Prices = React.forwardRef((props, ref) => {
	function handleClick() {
		console.log(ref)
        if (ref.current!= null) {
        ref.current.click();
        } else {

        }
      }
	
	  function getButton(text_button, buttonLink, target,predef_class) {
        if (GetUserName()=="undefined") {
            console.log("only login without href")
            return (
            <a class={predef_class+" prices__btn"} target="_blank" onClick={handleClick} >{text_button}</a>
            )
        } else {
            console.log("href without login")
            return (
                <a href={buttonLink} class={predef_class+" prices__btn"} target={target}>{text_button}</a>   
            )
        }
      }
	  
    return (

		
        <section className="prices" id="price">
				<div className="container">
					<div className="title-row">
						<h1 className="main-title title-row__title">Prices
						</h1>
						<div className="title-row__right">
							<p className="title-row__text">Choose the best option</p>
						</div>
					</div>
					<div className="prices__row">
						<div className="prices__element">
							<div className="prices__elemen__top">
								<h3 className="prices__title">Beginner</h3>
								<div className="prices__cost-row">
									<span className="prices__cost">0$</span>
								</div>
								<div className="prices__cost-row">
									<span className="prices__date">Monthly</span>
								</div>
								<ul className="prices__list-services">
									<li className="prices__list-element">
										<p className="prices__name">Writing
											estimation</p>
										<p className="prices__value">1 random
											criteria</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Speaking
											estimation</p>
										<p className="prices__value">1 random
											criteria</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Overall score</p>
										<p className="prices__value">N/A</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Errors
											checking</p>
										<p className="prices__value">N/A</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Improvements</p>
										<p className="prices__value">N/A</p>
									</li>

								</ul>
							</div>
							<div className="prices__btn-row">
								{getButton("Try","/writing","_self","btnV3")}
							</div>

						</div>

						{/* <div className="prices__element">
							<div className="prices__elemen__top">
								<h3 className="prices__title">Intermediate</h3>
								<div className="prices__cost-row">
									<span className="prices__cost">14.99$</span>
									<span className="prices__date">Monthly</span>
								</div>
								<ul className="prices__list-services">
									<li className="prices__list-element">
										<p className="prices__name">Writing
											estimation</p>
										<p className="prices__value prices__value_yes">YES</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Speaking
											estimation</p>
										<p className="prices__value prices__value_yes">YES</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Overall score</p>
										<p className="prices__value prices__value_yes">YES</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Errors
											checking</p>
										<p className="prices__value">N/A</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Improvements</p>
										<p className="prices__value">N/A</p>
									</li>

								</ul>
							</div>
							<div className="prices__btn-row">
								{getButton("Buy",process.env.REACT_APP_INTERMEDIATE_PLAN,"_blank","")}
							</div>

						</div> */}


						<div className="prices__element">
							<div className="prices__elemen__top">
								<h3 className="prices__title">Advanced</h3>
								<div className="prices__cost-row">
								<span className="prices__cost">14.99$</span>
									<span className="prices__cost_old">24.99$</span>
								</div>
								<div className="prices__cost-row">
									<span className="prices__date">Monthly</span>
									<span className="prices__date">2 days free</span>
								</div>
								<ul className="prices__list-services">
									<li className="prices__list-element">
										<p className="prices__name">Writing
											estimation</p>
										<p className="prices__value prices__value_yes">YES</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Speaking
											estimation</p>
										<p className="prices__value prices__value_yes">YES</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Overall score</p>
										<p className="prices__value prices__value_yes">YES</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Errors
											checking</p>
										<p className="prices__value prices__value_yes">YES</p>
									</li>

									<li className="prices__list-element">
										<p className="prices__name">Improvements</p>
										<p className="prices__value prices__value_yes">YES</p>
									</li>

								</ul>
							</div>
							<div className="prices__btn-row">
								{/* <a href="" className="prices__btn">Buy</a> */}
								{getButton("Try",process.env.REACT_APP_ADVANCED_PLAN,"_blank","")}
							</div>

						</div>


					</div>
				</div>
			</section>
    )
})

export default Prices