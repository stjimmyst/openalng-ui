import React, { useState, useEffect, useRef } from 'react'

const SpeakingSection = (props) => {
return (
    <section class="how-it-work2">
				<div class="container">
					<div class="title-row">
						<h2 class="main-title title-row__title">Speaking: how it works?
						</h2>
					</div>
					<p class="main-description how-it-work__description">
						Practice your speaking with virtual examiner
					</p>
					<div class="how-it-work__row">
						<div class="how-it-work__element">
							<img src="img/_src/h1.png" alt="" class="how-it-work__icon"/>
							<h3 class="how-it-work__title">Get speaking topic
							</h3>
						</div>
						<div class="how-it-work__element">
							<img src="img/_src/h4.png" alt="" class="how-it-work__icon"/>
							<h3 class="how-it-work__title">Record your answer
							</h3>
						</div>
						<div class="how-it-work__element">
							<img src="img/_src/h3.png" alt="" class="how-it-work__icon"/>
							<h3 class="how-it-work__title">Get your score!
							</h3>
						</div>
					</div>
					<div class="btn-row how-it-work__btn-row">
						<a href="#price" class="btnV2">Speak now</a>
					</div>
				</div>
			</section>

)

}

export default SpeakingSection