import React, { useState, useEffect, useRef } from 'react'
import MobNav from '../components/mob_nav'
import Header from '../components/header'

import Footer from '../components/footer'
import Cookies from 'js-cookie';
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

import { GetEstimation, GetUserName, getCardColor, getBlurColor, GetStubText, GetOverallScoreText, GetBandScoreText, StringToMarkup, DefaultCelpipSpeaking} from '../components/functions'

const CelpipSpeaking = (props) => {
    const [speakingResults, setSpeakingResults] = useState(GetEstimation("SpeakingCelpipEstimationResult"))
    const [showResults, setShowResults] = useState(false)
    const [showInProgress, setShowInProgress] = useState(false)
    const [showEstimateBuitton, setShowEstimateButon] = useState(false)
    const [taskDefinition, setTaskDefinition] = useState(getTaskDefinition())
    const [audioBlob, setAudioBlob] = useState();

    const [overall, setOverall] = useState(0)
    const [time, setTime] = useState(40 * 60); // Время в секундах
    const [isRunning, setIsRunning] = useState(false);

    function checkShowResults() {
        if (speakingResults == "undefined") {
            return true
        } else {
            updateTaskDefinition(speakingResults.question)
            return true
        }
    }

    useEffect(() => {

    }, [showEstimateBuitton])
    useEffect(() => {
        console.log("speakingResults was updated")
        setShowResults(checkShowResults)
    }, [speakingResults])
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

    const recorderControls = useAudioRecorder(
        {
            noiseSuppression: true,
            echoCancellation: true,
        },
        (err) => console.table(err) // onNotAllowedOrFound
    );
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement('audio');
        audio.src = url;
        audio.controls = true;
        audio.type = "audio/mpeg";
        setShowEstimateButon(true)
    };


    function calculateOverall() {
        console.log("calclulate_overall")
        if (speakingResults == "undefined") {
            return 0
        } else {
            let l = Object.keys(speakingResults.results.estimations).length
            let tmp = 0

            for (const key in speakingResults.results.estimations) {
                tmp = tmp + speakingResults.results.estimations[key].band
            }
            return (Math.round((tmp / l) * 2) / 2)
        }
    }

    function generateBlockResult() {
        return Object.keys(speakingResults.results.estimations).map((key, v) => {
            let card = "sec-info__element " + getCardColor(speakingResults.results.estimations[key].band) + " " + getBlurColor(speakingResults.results.estimations[key].stub)

            return (
                <div className={card}>
                    <div className="sec-info__left">
                        <h3 className="sec-info__title-element">{speakingResults.results.estimations[key].name}
                        </h3>
                        <p className="sec-info__nam-element">{GetBandScoreText(speakingResults.results.level, speakingResults.results.estimations[key].band, speakingResults.results.estimations[key].stub)}</p>
                    </div>
                    <div className="sec-info__rignt">
                        <p className="sec-info__text-element">{StringToMarkup(speakingResults.results.estimations[key].comment)}</p>
                    </div>
                    <div className="sec-info__element-error">{GetStubText(speakingResults.results.level)}</div>
                </div>
            )
        })
    }
    function generateBlockRecomendation() {
        return Object.keys(speakingResults.results.recommendations).map((key, v) => {
            let card = "sec-info__element " + getBlurColor(speakingResults.results.recommendations[key].stub)

            return (
                <div className={card}>
                    <div className="sec-info__left">
                        <h3 className="sec-info__title-element">{speakingResults.results.recommendations[key].name}</h3>
                    </div>
                    <div className="sec-info__rignt">
                        <p className="sec-info__text-element">{StringToMarkup(speakingResults.results.recommendations[key].comment)}</p>
                    </div>
                    <div className="sec-info__element-error">
                        {GetStubText(speakingResults.results.level)}
                        </div>
                </div>
            )
        })
    }

    const HandleChangeQuestion = e => {
        const inp = e.target.value;
        updateTaskDefinition(inp)

    }
    function updateTaskDefinition(inp) {
        Cookies.set('SpeakingCelpipTaskDefinition', inp);
        setTaskDefinition(inp)
    }

    function getTaskDefinition() {
        let cook = Cookies.get("SpeakingCelpipTaskDefinition")
        if (typeof (cook) != "undefined") {
            return cook
        } else {
            return DefaultCelpipSpeaking.results.question
        }
    }
    async function GetTask() {
        const response = await fetch("/getRandomTopic?"+new URLSearchParams({
            task_type: "speaking",
            test_type: "celpip"
        }), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            
        });
        const data = await response.json();
        setTaskDefinition(data.topic);
    };

    async function EstimateAnswer() {
        console.log(audioBlob);
        const audiofile = new File([audioBlob], "audiofile.mp3", {
            type: "audio/mpeg",
        });
        const formData = new FormData();
        formData.append("file", audiofile);


        const obj = {
            question: taskDefinition,
            user: GetUserName(),
            test: "celpip"
        };
        const json = JSON.stringify(obj);
        const blob = new Blob([json], {
            type: 'application/json'
        });
        formData.append("params", json);


        console.log(formData);
        for (var [key, value] of formData.entries()) {
            console.log(key, value);
        }

        const response = await fetch("/SpeakingEstimation", {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        let res = JSON.stringify(data);
        Cookies.set('SpeakingCelpipEstimationResult', res);
        setSpeakingResults(data)
        setShowResults(true)
        setShowInProgress(false)
    };



    return (
        <>
            <MobNav></MobNav>
            <Header></Header>
            <main className="main">
                <section className="sec-test">
                    <div className="container-test">
                        <textarea className="sec-test__field sec-test__field-white"
                            placeholder="Type Speaking task here or generate a random question."
                            value={taskDefinition}
                            onChange={HandleChangeQuestion}>
                        </textarea>
                        <div className="sec-test__btn-row">
                            <button className="sec-test__btn btnV1" onClick={e => GetTask()}>Random topic</button>
                            {/* <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 26.85C22.5667 26.85 21.3667 26.3347 20.4 25.3042C19.4333 24.2736 18.95 23.0222 18.95 21.55V9C18.95 7.6111 19.4407 6.43055 20.4221 5.45835C21.4034 4.48612 22.5951 4 23.9971 4C25.399 4 26.5917 4.48612 27.575 5.45835C28.5583 6.43055 29.05 7.6111 29.05 9V21.55C29.05 23.0222 28.5667 24.2736 27.6 25.3042C26.6333 26.3347 25.4333 26.85 24 26.85ZM22.5 42V35.2C18.9667 34.8333 16 33.35 13.6 30.75C11.2 28.15 10 25.0833 10 21.55H13C13 24.5833 14.0715 27.1333 16.2144 29.2C18.3573 31.2667 20.949 32.3 23.9894 32.3C27.0298 32.3 29.625 31.2667 31.775 29.2C33.925 27.1333 35 24.5833 35 21.55H38C38 25.0833 36.8 28.15 34.4 30.75C32 33.35 29.0333 34.8333 25.5 35.2V42H22.5ZM24 23.85C24.6 23.85 25.0917 23.625 25.475 23.175C25.8583 22.725 26.05 22.1833 26.05 21.55V9C26.05 8.43333 25.8535 7.95833 25.4606 7.575C25.0677 7.19167 24.5808 7 24 7C23.4192 7 22.9323 7.19167 22.5394 7.575C22.1465 7.95833 21.95 8.43333 21.95 9V21.55C21.95 22.1833 22.1417 22.725 22.525 23.175C22.9083 23.625 23.4 23.85 24 23.85Z"
                                    fill="white" />
                            </svg> */}
                            {/* </div> */}

                        </div>
                        <div className="sec-test__btn-row">
                            {/* <div className="microphone"> */}
                            <AudioRecorder
                                onRecordingComplete={
                                    (blob) => {
                                        addAudioElement(blob);
                                        setAudioBlob(blob);
                                    }}
                                recorderControls={recorderControls}
                                showVisualizer={true}

                            />
                        </div>
                        <div className="sec-info__counter" >
                            {showEstimateBuitton ? (
                                <button className="btnV2 load-btn" onClick={async () => {
                                    setShowResults(false)
                                    setShowInProgress(true)
                                    await EstimateAnswer()
                                }}>Estimate</button>

                            ) : (<></>)}
                        </div>

                    </div>
                </section>
                {showInProgress ? (
                    <div className="loader-container">
                        Analyse Speaking results...
                        <div className="loader"></div>
                    </div>

                ) : (<></>)}
                {showResults ? (<>
                    <section className="sec-info sec-info_active">
                        <div className="container-info">
                            {speakingResults.results.transcription != "" ? (<><div className="title-row">
                                <h1 className="main-title title-row__title">
                                    Transcription
                                </h1>
                            </div>
                            <div className="sec-info__elements-wrapper">
                                <div className="sec-test__field sec-test__field-grey-transcription" disabled="disabled">
                                    {speakingResults.transcription}
                                </div>
                            </div></>): (<></>)}
                            

                            <div className="title-row">
                                <h1 className="main-title title-row__title">
                                    Results
                                </h1>
                            </div>

                            <div className="sec-info__elements-wrapper">
                                {generateBlockResult()}

                                <div className="sec-info__counter">
                                    <span>{GetOverallScoreText(speakingResults.results.level, overall)}</span>
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

export default CelpipSpeaking