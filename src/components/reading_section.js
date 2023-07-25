import React, { useState, useEffect, useRef } from 'react'

import DropDown from './dropdown';
import FillTheGapsQuestion from './fillthegaps_question';

const ReadingSection = (props) => {

	useEffect(() => {
		var coll = document.getElementsByClassName("collapsible");
		var i;
		console.log(coll.length)

		for (i = 0; i < coll.length; i++) {
			coll[i].addEventListener("click", function () {
				this.classList.toggle("active");
				var content = this.nextElementSibling;
				if (content.style.maxHeight) {
					content.style.maxHeight = null;
				} else {
					content.style.maxHeight = content.scrollHeight + "px";
				}
			});
		}
	}, false)


	return (
		<>
			<main className="main">
				<section class="how-it-work2">
					<div class="container">
						<div class="title-row">
							<h2 class="main-title title-row__title">IELTS Reading
							</h2>
						</div>
						<p class="main-description how-it-work__description">
							Practice your speaking with virtual examiner
						</p>
						<div class="how-it-work__row">
							<div class="how-it-work__element">
								<img src="img/_src/h3.png" alt="" class="how-it-work__icon" />
								<h3 class="how-it-work__title">4 sections!
								</h3>
							</div>
							<div class="how-it-work__element">
								<img src="img/_src/question.png" alt="" class="how-it-work__icon" />
								<h3 class="how-it-work__title">40 questions
								</h3>
							</div>
							<div class="how-it-work__element">
								<img src="img/_src/timer.png" alt="" class="how-it-work__icon" />
								<h3 class="how-it-work__title">60 minutes
								</h3>
							</div>

						</div>
						<div class="btn-row how-it-work__btn-row">
							<a href="/speaking" class="btnV2">Practice now</a>
						</div>
					</div>
				</section>
				<section className="sec-info sec-info_active">
					<div className="container-info">
						<div className="title-row">
							<h1 className="main-title title-row__title">
								Test #12532
							</h1>
						</div>
						<div className="sec-info__elements-wrapper">
							<div className="sec-info__element collapsible collapsible_top">
								Section 1: Questions 1-14
							</div>
							<div className="content">
								<div className="questions_section">
									<div className="text_block">
										<h1>HTML Ipsum Presents</h1>

										<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

										<h2>Header Level 2</h2>

										<ol>
											<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
											<li>Aliquam tincidunt mauris eu risus.</li>
										</ol>

										<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

										<h3>Header Level 3</h3>

										<ul>
											<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
											<li>Aliquam tincidunt mauris eu risus.</li>
										</ul>

									</div>
									<div className="question-section">
										<div className="question-text">
											<h3>Do the following statements agree with the information givenen in the text?</h3>
										</div>
										<div className="question-item">
											<div className='question-item-number'>
												1
											</div>
											<div className='question-item-text'>
												Write the correct letter DropDown type
											</div>
											<div className='question-item-text-dropdown'>
												<DropDown></DropDown>
											</div>
										</div>
										<div className="question-item">
											<div className='question-item-number'>
												2
											</div>
											<div className='question-item-text'>
												<FillTheGapsQuestion></FillTheGapsQuestion>
											</div>
										</div>
									</div>
									<div className="question-section">
										<div className="question-text">
											<h3>DSome question description 2</h3>
										</div>
										<div className="question-item">
											<div className='question-item-number'>
												3
											</div>
											<div className='question-item-text'>
												some text
											</div>
										</div>
									</div>

								</div>

							</div>
							<div className="sec-info__element collapsible collapsible_middle">
								Section 2
							</div>
							<div class="content">
								some text
							</div>
							<div className="sec-info__element collapsible collapsible_middle">
								Section 3
							</div>
							<div class="content">
								some text
							</div>
							<div className="sec-info__element collapsible collapsible_bottom">
								Section 4
							</div>
							<div class="content">
								some text
							</div>
						</div>

					</div>
				</section>
			</main>
		</>

	)

}

export default ReadingSection