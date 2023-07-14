import React, { useState, useEffect, useRef } from 'react'
import MobNav from '../components/mob_nav'
import Header from '../components/header'

import Footer from '../components/footer'
import Cookies from 'js-cookie';
import { GetEstimation, GetUserName, getCardColor, getBlurColor, GetStubText,GetOverallScoreText,GetBandScoreText,StringToMarkup } from '../components/functions'

const Writing = (props) => {
    const [writingResults, setWritingResults] = useState(GetEstimation('WritingEstimationResult'))
    const [showResults, setShowResults] = useState(false)
    const [taskDefinition, setTaskDefinition] = useState(getTaskDefinition())
    const [currentAnswer, setCurrentAnswer] = useState(getCurrentAnswer())
    const [wordCount, setWordCount] = useState("0");
    const [overall, setOverall] = useState(0)
    const [time, setTime] = useState(40 * 60); // Время в секундах
    const [isRunning, setIsRunning] = useState(false);
    const [showInProgress, setShowInProgress] = useState(false)

    function checkShowResults() {
        if (writingResults == "undefined") {
            return false
        } else {
            return true
        }
    }

    useEffect(() => {
        console.log("writingResults was updated")
        setShowResults(checkShowResults)
    }, [writingResults])
    useEffect(() => {
        console.log("overall was calculated to " + overall)
    }, [overall])
    useEffect(() => {
        console.log("showResults changed value to " + showResults)
        setOverall(calculateOverall)

    }, [showResults]);
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
          return "Timer"
        }
      };


    function calculateOverall() {
        if (writingResults == "undefined") {
            return 0
        } else {
            let l = Object.keys(writingResults.results.estimations).length
            let tmp = 0

            for (const key in writingResults.results.estimations) {
                tmp = tmp + writingResults.results.estimations[key].band
            }
            return (Math.round((tmp / l) * 2) / 2)
        }
    }

    function generateBlockResult() {
        return Object.keys(writingResults.results.estimations).map((key, v) => {
            let card = "sec-info__element " + getCardColor(writingResults.results.estimations[key].band) + " " + getBlurColor(writingResults.results.estimations[key].stub)

            return (
                <div className={card}>
                    <div className="sec-info__left">
                        <h3 className="sec-info__title-element">{writingResults.results.estimations[key].name}
                        </h3>
                        <p className="sec-info__nam-element">{GetBandScoreText(writingResults.results.level,writingResults.results.estimations[key].band,writingResults.results.estimations[key].stub)}</p>
                    </div>
                    <div className="sec-info__rignt">
                        <p className="sec-info__text-element">{StringToMarkup(writingResults.results.estimations[key].comment)}</p>
                    </div>
                    <div className="sec-info__element-error">{GetStubText(writingResults.results.level)}</div>
                </div>
            )
        })
    }
    function generateBlockRecomendation() {
        return Object.keys(writingResults.results.recommendations).map((key, v) => {
            let card = "sec-info__element " + getBlurColor(writingResults.results.recommendations[key].stub)

            return (
                <div className={card}>
                    <div className="sec-info__left">
                        <h3 className="sec-info__title-element">{writingResults.results.recommendations[key].name}</h3>
                    </div>
                    <div className="sec-info__rignt">
                    {/* <textarea className="text-area-result"
                            value={writingResults.results.recommendations[key].comment}>
                        </textarea> */}

                        <p className="sec-info__text-element">{StringToMarkup(writingResults.results.recommendations[key].comment)}</p>
                    </div>
                    <div className="sec-info__element-error">{GetStubText(writingResults.results.level)}</div>
                </div>
            )
        })
    }
    function getCurrentAnswer() {
        let cook = Cookies.get("CurrentAnswer")
        if (typeof (cook) != "undefined") {
            return cook
        } else {
            return ""
        }
    }
    const AnswerUpdate = e => {
        const inp = e.target.value;
        updateCurrentAnswer(inp)
        console.log(inp)
        if (inp == "") {
            setWordCount("0")
        } else {
            const words = inp.split(" ").length
            setWordCount(words.toString())
        }

    }
    const HandleChangeQuestion = e => {
        const inp = e.target.value;
        updateTaskDefinition(inp)

    }
    function updateTaskDefinition(inp) {
        Cookies.set('TaskDefinition', inp);
        setTaskDefinition(inp)
    }
    function updateCurrentAnswer(inp) {
        Cookies.set('CurrentAnswer', inp);
        setCurrentAnswer(inp)
    }
    function getTaskDefinition() {
        let cook = Cookies.get("TaskDefinition")
        if (typeof (cook) != "undefined") {
            return cook
        } else {
            return ""
        }
    }
    async function GetTask() {
        const response = await fetch("/getRandomTopic", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setTaskDefinition(data.topic);
    };

    async function EstimateAnswer() {
        const response = await fetch("/WritingEstimation", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question: taskDefinition,
                answer: currentAnswer,
                user: GetUserName()
            })
        });
        const data = await response.json();
        let json = JSON.stringify(data);
        Cookies.set('WritingEstimationResult', json);
        setWritingResults(data)
        setShowInProgress(false)
        setShowResults(true)
        
    }


    return (
        <>
            <MobNav></MobNav>
            <Header></Header>
            <main className="main">
                <section className="sec-test">
                    <div className="container-test">
                        <textarea className="sec-test__field sec-test__field-white"
                            placeholder="Type Writing task here or generate a random question."
                            value={taskDefinition}
                            onChange={HandleChangeQuestion}
                        >

                        </textarea>
                        <div className="sec-test__btn-row">
                            <button className="sec-test__btn btnV1" onClick={e => GetTask()}>Random topic</button>
                            <button className="sec-test__btn btnTest" onClick={startTimer}>{formatTime(time)}</button>
                        </div>
                        {/* <div className="sec-test__field sec-test__field-grey" disabled="disabled"> */}
                        <textarea className="sec-test__field sec-test__field-grey"
                            placeholder="type your answer here"
                            value={currentAnswer}
                            onChange={AnswerUpdate}
                        >

                        </textarea>
                        {/* </div> */}
                        <div className="sec-test__btn-row">
                            <p className="sec-test__counter">Word count: {wordCount}</p>
                        </div>
                        <div className="sec-test__btn-row">
                            <button className="btnV2 load-btn" onClick={async () => {
                                setShowResults(false)
                                setShowInProgress(true)
                                await EstimateAnswer()
                            }}>Estimate</button>
                        </div>

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
                            <div className="title-row">
                                <h1 className="main-title title-row__title">
                                    Results
                                </h1>
                            </div>
                            <div className="sec-info__elements-wrapper">
                                {generateBlockResult()}

                                <div className="sec-info__counter">
                                <span>{GetOverallScoreText(writingResults.results.level, overall)}</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="sec-info recommend-sec sec-info_active">
                        <div className="container-info">
                            <div className="title-row">
                                <h1 className="main-title title-row__title">
                                    Recommendations
                                </h1>
                            </div>
                            <div className="sec-info__elements-wrapper">
                                {generateBlockRecomendation()}
                            </div>
                        </div>
                    </section>
                </>) : (<></>)}
            </main>
            <Footer></Footer>
        </>
    )
}

export default Writing