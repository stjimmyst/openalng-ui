import React, { useState, useEffect, useRef } from 'react'

const WritingSection = (props) => {
return (
    <section className="how-it-work" id="WritingSection">
				<div className="container">
					<div className="title-row">
						<h2 className="main-title title-row__title">Writing: how it works?</h2>
					</div>
					<p className="main-description how-it-work__description">
						It takes seconds to generate a band score for your essay. And take minutes to fix errors.
					</p>
					<div className="how-it-work__row">
						<div className="how-it-work__element">
							<img src="img/_src/h1.png" alt="" className="how-it-work__icon"/>
							<h3 className="how-it-work__title">Get writing topic</h3>
						</div>
						<div className="how-it-work__element">
							<img src="img/_src/h2.png" alt="" className="how-it-work__icon"/>
							<h3 className="how-it-work__title">Type your essay
							</h3>
						</div>
						<div className="how-it-work__element">
							<img src="img/_src/h3.png" alt="" className="how-it-work__icon"/>
							<h3 className="how-it-work__title">Get your score!
							</h3>
						</div>
					</div>
					<div className="btn-row how-it-work__btn-row">
						<a href="#price" className="btnV2">Write now</a>
					</div>
				</div>
			</section>

)

}

export default WritingSection