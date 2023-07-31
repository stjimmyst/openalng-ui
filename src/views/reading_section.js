import React, { useState, useEffect, useRef } from 'react'

const ReadingSection = (props) => {


    return (
        <section class="how-it-work2">
				<div className="container">
					<div className="title-row">
						<h2 className="main-title title-row__title">Reading: how it works?</h2>
					</div>
					<p className="main-description how-it-work__description">
						Answer to Reading section questions and get your overall score with explanation!
					</p>
					<div className="how-it-work__row">
						<div className="how-it-work__element">
							<img src="img/_src/h1.png" alt="" className="how-it-work__icon"/>
							<h3 className="how-it-work__title">Generate task</h3>
						</div>
						<div className="how-it-work__element">
							<img src="img/_src/question.png" alt="" className="how-it-work__icon"/>
							<h3 className="how-it-work__title">Answer to questions
							</h3>
						</div>
						<div className="how-it-work__element">
							<img src="img/_src/h3.png" alt="" className="how-it-work__icon"/>
							<h3 className="how-it-work__title">Get your score!
							</h3>
						</div>
					</div>
					<div className="btn-row how-it-work__btn-row">
						<a href="/reading" className="btnV2">Read now</a>
					</div>
				</div>
			</section>
    )
}

export default ReadingSection