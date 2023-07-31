import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import DropDown from '../components/dropdown';
import FillTheGapsQuestion from '../components/fillthegaps_question';
import FillTheGapsStyledText from '../components/fillthegaps_styled_text';
import SelectQuestion from '../components/select_question';
import { MatchingQuestionType, GapQuestionType, GapsStyledTextQuestionType, SelectQuestionType } from '../components/functions';
import ReadingContext from '../components/context/reading-context';
import { DefaultIeltsReading } from '../components/const/const';
import { GetEstimation,GetOverallScoreText, GetUserName} from '../components/functions';
import Cookies from 'js-cookie';
import MobNav from '../components/mob_nav'
import Header from '../components/header'
import Footer from '../components/footer'

import Timer from '../components/timer';
import ResultCard from '../components/result_card';

const IeltsReading = (props) => {

	const [questions, setQuestions] = useState({});
	const [readingDefinition, setReadingDefinition] = useState(DefaultIeltsReading)
	const [readingResults, setReadingResults] = useState(GetEstimation('ReadingIeltsEstimationResult'))
	const [showQuestions, setShowQuestions] = useState(false)  
	const reading_value = { questions, setQuestions };
	const [showInProgress, setShowInProgress] = useState(false)
    const [showResults, setShowResults] = useState(false)

	const [time, setTime] = useState(60 * 60); // Время в секундах
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timerId;
        if (isRunning && time > 0) {
          timerId = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
          }, 1000);
        }
    
        return () => {
          clearInterval(timerId);
        };
      }, [isRunning, time]);
    
      const startTimer = () => {
        setIsRunning(true);
      };

      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
    
        if (isRunning) {
          return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
          return ""
        }
      };

	async function EstimateAnswer() {
        const response = await fetch("/ReadingEstimation", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                test_type: "ielts",
				test_id: readingDefinition.exam_id,
				answers: questions,
				user: GetUserName()
            })
        });
        const data = await response.json();
        let json = JSON.stringify(data);
        Cookies.set('ReadingIeltsEstimationResult', json);
        setReadingResults(data)
        setShowInProgress(false)
        setShowResults(true)
        
    }

	

	useEffect(
		() => {
			console.log("READIN_STATE=")
			console.log(questions)

	// 		var cards = document.querySelectorAll('.card');

	// [...cards].forEach((card) => {
	// 	card.addEventListener('click', function () {
	// 		card.classList.toggle('is-flipped');
	// 	});
	// });
		}
	)

	useEffect(() => {

	})

	useEffect(() => {
		var coll = document.getElementsByClassName("collapsible");
		var i;
		if (coll != null) {

			for (i = 0; i < coll.length; i++) {
				coll[i].addEventListener("click", function () {
					this.classList.toggle("active");
					var content = this.nextElementSibling;
					if (content != null) {
						if (content.style.maxHeight) {
							content.style.maxHeight = null;
						} else {
							content.style.maxHeight = content.scrollHeight + "px";
						}
					}
				});
			}
		}
	}, [showQuestions])

	function testinput(e) {
		setQuestions(prevState => ({
			...prevState,
			[e.target.id]: {
				value:e.target.value,
				number:e.target.dataset.item_number
			}
		}));
	}

	useEffect(() => {
		var coll = document.getElementsByClassName("readingquestion");
		var i;
		for (i = 0; i < coll.length; i++) {
			coll[i].addEventListener("change", testinput, false);
		}
	}, [showQuestions])





	function GenerateQuestionItems(items, type) {
		if (type.id == GapsStyledTextQuestionType) {
			return (
				<div className="question-item-gaps-styled-text">
					<FillTheGapsStyledText items={items} question_markdown={type.question_markdown}></FillTheGapsStyledText>
				</div>
			)
		} else {
			return items.map(i => {
				if (type.id == MatchingQuestionType) {
					return (
						<div className="question-item-matching">
							<div className='number'>
								<strong>({i.item_number})</strong>
							</div>
							<div className='text'>
								{i.item_text}
							</div>
							<div className='matching'>
								<DropDown item_uuid={i.item_uuid} item_number={i.item_number} item_values={i.item_values}></DropDown>
							</div>
						</div>
					)
				} else if (type.id == GapQuestionType) {
					return (
						<div className="question-item-gap">
							<div className='number'>
								<strong>({i.item_number})</strong>
							</div>
							<div className='text'>
								<FillTheGapsQuestion item_uuid={i.item_uuid} question_text={i.item_text} item_number={i.item_number}></FillTheGapsQuestion>
							</div>
						</div>
					)
				} else if (type.id == SelectQuestionType) {
					return (
						<div className="question-item-select">
							<div className='number'>
								<strong>({i.item_number})</strong>
							</div>
							<div className='text'>
								{i.item_text}
								<SelectQuestion item_uuid={i.item_uuid} item_values={i.item_values} item_number={i.item_number}></SelectQuestion>
							</div>
						</div>
					)
				}

			})
		}
	}

	function GenerateQuestions(questions) {
		return questions.map(question => {
			return (
				<div className="question-section">
					<div className="question-text" dangerouslySetInnerHTML={{ __html: question.question_text }}>
					</div>
					{GenerateQuestionItems(question.items, question.type)}
				</div>
			)
		})
	}

	function GenerateSectionContent(contents) {
		return contents.map(content => {
			return (
				<div className="questions_section">
					<div className="text_block" dangerouslySetInnerHTML={{ __html: content.content_text }}>
					</div>
					{GenerateQuestions(content.questions)}
				</div>
			)

		})
	}

	function GenerateSections() {
		var len = readingDefinition.sections.length
		var i = 0
		return readingDefinition.sections.map(section => {
			var order = ""
			if (i == 0) {
				order = "collapsible_top"
			} else if (i == len - 1) {
				order = "collapsible_bottom"
			} else {
				order = "collapsible_middle"
			}
			i += 1
			return (
				<>
					<div className={`sec-info__element collapsible ` + order}>
						Section {section.section_number}: {section.section_description}
					</div>
					<div className="content">
						{GenerateSectionContent(section.contents)}
					</div>
				</>

			)


		})
	}

	async function GetTask() {
        const response = await fetch("/getRandomTopic?"+new URLSearchParams({
            task_type: "reading",
            test_type: "ielts"
        }), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
        });
        const data = await response.json();
		console.log(data)
        setReadingDefinition(data.topic);
		setShowQuestions(true);
    };


	return (
		<>
		<MobNav></MobNav>
            <Header></Header>
			<ReadingContext.Provider value={reading_value}>
				<main className="main">
					<section class="how-it-work2">
					<div class="container">
						<div class="title-row">
							<h2 class="main-title title-row__title">IELTS Reading
							</h2>
						</div>
						<p class="main-description how-it-work__description">
							Generate task and answer to each question.
						</p>
						{/* <div class="how-it-work__row">
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

						</div> */}
						<div class="btn-row how-it-work__btn-row">
							{/* <a href="/speaking" class="btnV2">Generate test</a> */}
							<button className="sec-test__btn btnV1" onClick={e => GetTask()}>Generate questions</button>

						</div>
					</div>
				</section>
				{showQuestions ? (<>
					<section className="sec-info sec-info_active">
						<div className="container-info">

							<div className="title-row-reading">
								<h1 className="main-title title-row__title">
								{/* {formatTime(time)} */}
								</h1>
								
                           		 
							</div>
							<div className="sec-info__elements-wrapper">
								{GenerateSections()}
							</div>



						</div>
						<div className="btn-row how-it-work__btn-row">
                            <button className="btnV2 load-btn" onClick={async () => {
                                setShowResults(false)
                                setShowInProgress(true)
                                await EstimateAnswer()
                            }}>Check answers</button>
                        </div>
					</section>
					{showInProgress ? (
                    <div className="loader-container">
                    Analyse Writing results...
                    <div className="loader"></div>
                </div>

                ) : (<></>)}
				{showResults ? (<>
                    <section className="sec-info sec-info_active">
                        <div className="container-info">
                            {/* <div className="title-row">
                                <h1 className="main-title title-row__title">
                                    Results
                                </h1>
                            </div> */}

                            <div className="sec-info__elements-wrapper">
							{/* <ResultCard></ResultCard> */}

                                <div className="sec-info__counter">
									<span>Overall: {readingResults.score}</span>
                                    {/* <span>{GetOverallScoreText(readingResults.level, overall)}</span> */}
                                </div>
                            </div>
                        </div>
                    </section>
					<section className="sec-info recommend-sec sec-info_active">
                        <div className="container-info">
                            <div className="title-row">
                                <h1 className="main-title title-row__title">
                                    Errors ({readingResults.errors.length})
                                </h1>
                            </div>
                            <div className="sec-info__elements-wrapper">
								<div className="cards-container">
								<ResultCard errors={readingResults.errors}></ResultCard>
								</div>
                            </div>
                        </div>
                    </section>

                </>) : (<></>)}
				</>) : (<></>)}

					{/* <section className="sec-info sec-info_active">
						<div className="container-info">
							alala
							<ResultCard></ResultCard>
						</div>
					</section> */}

				</main>
			</ReadingContext.Provider>
			<Footer></Footer>
		</>

	)

}
IeltsReading.defaultProps = DefaultIeltsReading;

IeltsReading.propTypes = {
	reading_type: PropTypes.string,
	exam_id: PropTypes.string,
	sections: PropTypes.array,
	section_id: PropTypes.string,
	section_number: PropTypes.string,
	section_description: PropTypes.string,
	contents: PropTypes.array,
	content_id: PropTypes.string,
	content_text: PropTypes.string,
	question_text: PropTypes.string,
	question_type: PropTypes.string,
	question_type: PropTypes.string,
	items: PropTypes.array,
	id: PropTypes.string,
	item_id: PropTypes.string,
	item_values: PropTypes.array,
	question_markdown: PropTypes.string,

}

export default IeltsReading