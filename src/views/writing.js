import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet'

import MenuComponent from '../components/menu-component'
import WritingResultContainer from '../components/writing-result-container'
import ImprovementsContainer from '../components/improvements-container'
import './writing.css'
import Cookies from 'js-cookie';
import { GetUserName,getCardColor, GetStubText, } from '../components/functions';
import CardResult from '../components/card-result'
import '../components/writing-result-container.css'
import ImprovementCard from '../components/improvement-card'
import Overall from '../components/ovevrall';



const Writing = (props) => {
  const [showResults, setShowResults] = useState(false)
  const [time, setTime] = useState(40 * 60); // Время в секундах
  const [isRunning, setIsRunning] = useState(false);
  const [userLevel, setUserLevel] = useState(0)
  const [lrScore, setLrScore] = useState(4)
  const [ccScore, setCcScore] = useState(4)
  const [taScore, setTaScore] = useState(4)
  const [graScore, setGraScore] = useState(4)
  const [overall, setOverall] = useState(4)
  const [lrComment, setLrComment] = useState("")
  const [ccComment, setCcComment] = useState("")
  const [taComment, setTaComment] = useState("")
  const [graComment, setGraComment] = useState("")
  const [lrStub, setLrStub] = useState(false)
  const [ccStub, setCcStub] = useState(false)
  const [taStub, setTaStub] = useState(false)
  const [graStub, setGraStub] = useState(false)
  const [selfimprovementsComment, setSelfimprovementsComment] = useState("")
  const [errorsComment, setErrorsComment] = useState("")


  function updateResults(estimation) {
    setUserLevel(estimation.body.level)
    let tascore = parseInt(estimation.body.ta.band)
    let ccscore = parseInt(estimation.body.cc.band)
    let lrscore = parseInt(estimation.body.lr.band)
    let grascore = parseInt(estimation.body.gra.band)
      setTaScore(tascore)
      setCcScore(ccscore)
      setLrScore(lrscore)
      setGraScore(grascore)
      setTaStub(estimation.body.ta.stub)
      setCcStub(estimation.body.cc.stub)
      setLrStub(estimation.body.lr.stub)
      setGraStub(estimation.body.gra.stub)
      setTaComment(estimation.body.ta.comment)
      setCcComment(estimation.body.cc.comment)
      setLrComment(estimation.body.lr.comment)
      setGraComment(estimation.body.gra.comment)
      setSelfimprovementsComment(estimation.body.selfimprovements.comment)
      setErrorsComment(estimation.body.errors.comment)
      setOverall(Math.round(((tascore + ccscore + grascore + lrscore) / 4) * 2) / 2)
      console.log("overall calculated: "+ overall)
  }

  function GetOverallBlur(userlevel) {
    if (userlevel > 0) {
        return "Heading"
    } else {
        return "Heading blured"
    }
}
  

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

  const HandleChangeQuestion = e => {
    const inp = e.target.value;
    console.log(inp)
    updateTaskDefinition(inp)
    
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    if (isRunning) {
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return "Timer"
    }
  };

  const [title, setTitle] = useState("0");
  //const for Task Achevements

  const [currentAnswer, setCurrentAnswer] = useState(getCurrentAnswer())
  const [taskDefinition, setTaskDefinition] = useState(getTaskDefinition())
  const HandleChange = e => {
    const inp = e.target.value;
    updateCurrentAnswer(inp)
    const words = inp.split(" ").length
    setTitle(words.toString())

  }

  function updateTaskDefinition(inp) {
    Cookies.set('TaskDefinition', inp, { expires: 1 });
    setTaskDefinition(inp)
  }

  function updateCurrentAnswer(inp) {
    Cookies.set('CurrentAnswer', inp, { expires: 1 });
    setCurrentAnswer(inp)
  }

  function getTaskDefinition() {
    let cook = Cookies.get("TaskDefinition")
    if (typeof(cook)!="undefined") {
      return cook
    } else {
      return ""
    }
  }

  function getCurrentAnswer() {
    let cook = Cookies.get("CurrentAnswer")
    if (typeof(cook)!="undefined") {
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
    updateResults(data)
  }




  return (
    <div className="writing-container">
      <Helmet>
        <title>Writing - OpenLang</title>
        <meta property="og:title" content="Writing - OpenLang" />
      </Helmet>
      <div className="writing-menu-container menuecontainer">
        <MenuComponent rootClassName="menu-component-root-class-name1"></MenuComponent>
      </div>
      <div className="writing-container01">
        <div className="writing-container02">
          <div className="writing-container03">
            <button type="button" className="button" onClick={e => GetTask()}>
              Generate
            </button>
          </div>
          <div className="writing-container04">
            <textarea
              placeholder="Type Writing task here or generate a random question."
              className="writing-textarea textarea"
              value={taskDefinition}
            onChange={HandleChangeQuestion}

            ></textarea>
          </div>
          <div className="writing-container05">
            <button type="button" 
            className="writing-button1 button" 
            onClick={startTimer}
            >
              {formatTime(time)}
            </button>
          </div>
        </div>
        <div className="writing-container06">
          <textarea
            placeholder="Type your answer here."
            className="writing-textarea1 textinput"
            onChange={HandleChange}
            value={currentAnswer}
          ></textarea>
        </div>
        <div className="writing-container07">
          <span>Word count: {title}</span>
        </div>
        <div className="writing-container08">
          <button type="button" className="writing-button2 button" onClick={async () =>  {
            await EstimateAnswer()
            setShowResults(true)
          }}>
            Estimate
          </button>
        </div>
      </div>
      {showResults ? (
        <div className="mycontainer">
        <div
          className={`estimation-container-container`}
        >
          <CardResult
            rootClassName={getCardColor(taScore)}
            className=""
            score={taScore}
            comment={taComment}
            stub={taStub}
            stubText={GetStubText(userLevel)}
          ></CardResult>
          <CardResult
            header="Coherence &amp; Cohesion"
            rootClassName={getCardColor(ccScore)}
            className=""
            score={ccScore}
            comment={ccComment}
            stub={ccStub}
            stubText={GetStubText(userLevel)}
          ></CardResult>
          <CardResult
            header="Lexical Resource"
            rootClassName={getCardColor(lrScore)}
            className=""
            score={lrScore}
            comment={lrComment}
            stub={lrStub}
            stubText={GetStubText(userLevel)}
          ></CardResult>
          <CardResult
            header="Grammatical Range and Accuracy"
            rootClassName={getCardColor(graScore)}
            className=""
            score={graScore}
            comment={graComment}
            stubText={GetStubText(userLevel)}
            stub={graStub}
          ></CardResult>
        </div>
        <div className="overall-container-container">
                <h1 className="Heading">Overall:</h1>
                <h1 className={GetOverallBlur(userLevel)}>{overall}</h1>
            </div>
        {/* <Overall userlevel={userLevel} overall={overall}></Overall> */}
        <ImprovementsContainer userlevel={userLevel} improvements={selfimprovementsComment} errors={errorsComment}></ImprovementsContainer>
      </div>
      ): (<div/>)
      }
    </div>
  )
}

export default Writing
