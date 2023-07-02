import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet'

import MenuComponent from '../components/menu-component'
import SpeakingResultContainer from '../components/speaking-result-container'
import ImprovementsContainer from '../components/improvements-container'
import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import Cookies from 'js-cookie';
import './speaking.css'
import { GetUserName,getCardColor, GetStubText } from '../components/functions';

import CardResult from '../components/card-result'
import '../components/speaking-result-container.css'
import ImprovementCard from '../components/improvement-card'
import Overall from '../components/ovevrall';

const Speaking = (props) => {

  const [showResults, setShowResults] = useState(false)
  const [showEstimate, setShowEstimate] = useState(false)
  const [taskDefinition, setTaskDefinition] = useState('')
  const [audioBlob, setAudioBlob] = useState();
  const [userLevel, setUserLevel] = useState(0)
  const [transcription, setTranscription] = useState("this is default transcription")
  const [fcScore, setFcScore] = useState(0)
  const [lrScore, setLrScore] = useState(0)
  const [graScore, setGraScore] = useState(0)
  const [pScore, setPScore] = useState(0)
  const [fcStub, setFcStub] = useState(false)
  const [lrStub, setLrStub] = useState(false)
  const [graStub, setGraStub] = useState(false)
  const [pStub, setPStub] = useState(false)
  const [overall, setOverall] = useState(4)
  const [fcComment, setFcComment] = useState("")
  const [lrComment, setLrComment] = useState("")
  const [graComment, setGraComment] = useState("")
  const [pComment, setPComment] = useState("")
  const [selfimprovementsComment, setSelfimprovementsComment] = useState("")
  const [errorsComment, setErrorsComment] = useState("")

  // useEffect(() => {updateResults()})
  function updateResults(estimation) {
    console.log(estimation)
    setUserLevel(estimation.body.level)
    let fcscore = parseInt(estimation.body.fc.band)
    let lrscore = parseInt(estimation.body.lr.band)
    let grascore = parseInt(estimation.body.gra.band)
    let pscore = parseInt(estimation.body.p.band)
    setFcScore(fcscore)
    setLrScore(lrscore)
    setGraScore(grascore)
    setPScore(pscore)
    setFcStub(estimation.body.fc.stub)
    setLrStub(estimation.body.lr.stub)
    setGraStub(estimation.body.gra.stub)
    setPStub(estimation.body.p.stub)
    setFcComment(estimation.body.fc.comment)
    setLrComment(estimation.body.lr.comment)
    setGraComment(estimation.body.gra.comment)
    setPComment(estimation.body.p.comment)
    setTranscription(estimation.transcription)
    setSelfimprovementsComment(estimation.body.selfimprovements.comment)
    setErrorsComment(estimation.body.errors.comment)
    setOverall(Math.round(((fcscore + pscore + grascore + lrscore) / 4) * 2) / 2)
    setShowResults(true)
  }

  function GetOverallBlur(userlevel) {
    if (userlevel > 0) {
        return "Heading"
    } else {
        return "Heading blured"
    }
}



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
    // document.body.appendChild(audio);
    setShowEstimate(true)
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
      user: GetUserName()
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
    console.log(res)
    Cookies.remove('speakingestimation');
    Cookies.set('speakingestimation', res, { expires: 7 });
    updateResults(data)
  };


  async function GetTask() {
    const response = await fetch("/getRandomSpeakingTopic", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setTaskDefinition(data.topic);
  };

  const HandleChangeQuestion = e => {
    const inp = e.target.value;
    console.log(inp)
    setTaskDefinition(inp)
  }

  return (
    <div className="speaking-container">
      <Helmet>
        <title>Speaking - OpenLang</title>
        <meta property="og:title" content="Speaking - OpenLang" />
      </Helmet>
      <div className="speaking-menu-container menuecontainer">
        <MenuComponent rootClassName="menu-component-root-class-name"></MenuComponent>
      </div>
      <div className="speaking-container01">
        <div className="speaking-container02">
          <div className="speaking-container03">
            <button type="button" className="speaking-button button" onClick={e => GetTask()}>
              Generate
            </button>
          </div>
          <div className="speaking-container04">
            <textarea
              placeholder="Type your question here or generate a new one"
              className="speaking-textarea textarea"
              value={taskDefinition}
            onChange={HandleChangeQuestion}
            ></textarea>
          </div>
          <div className="speaking-container05">
            <button type="button" className="button">
              Timer
            </button>
          </div>
        </div>
        <div className="speaking-container06">
          <AudioRecorder
                onRecordingComplete={
                  (blob) => {
                    addAudioElement(blob);
                    setAudioBlob(blob);
                  }}
                recorderControls={recorderControls}
              />
        </div>
        <div className="speaking-container07">
        {
          showEstimate ? (
          <button type="button" className="speaking-button3 button" onClick={async () =>  {
            EstimateAnswer()
            }}>
            Estimate
          </button>
        ):(<div/>)
        }
        </div>
        
        
      </div>
      {showResults ? (
        <div className="mycontainer">
        <div className="speaking-transcription-container">
              <textarea
                value={transcription}
                className="speaking-transcription textarea"
              ></textarea>
            </div>
        <div
          className={`estimation-container-container`}
        >
          <CardResult
            header="Fluency and Coherence"
            rootClassName={getCardColor(fcScore)}
            score={fcScore}
            comment={fcComment}
            stub={fcStub}
            stubText={GetStubText(userLevel)}
          ></CardResult>
          <CardResult
            header="Lexical Resource"
            rootClassName={getCardColor(lrScore)}
            score={lrScore}
            comment={lrComment}
            stub={lrStub}
            stubText={GetStubText(userLevel)}
          ></CardResult>
          <CardResult
            header="Grammatical Range and Accuracy"
            rootClassName={getCardColor(graScore)}
            score={graScore}
            comment={graComment}
            stub={graStub}
            stubText={GetStubText(userLevel)}
          ></CardResult>
          <CardResult
            header="Pronunciation"
            rootClassName={getCardColor(pScore)}
            score={pScore}
            comment={pComment}
            stub={pStub}
            stubText={GetStubText(userLevel)}
          ></CardResult>
        </div>
        <div className="overall-container-container">
                <h1 className="Heading">Overall:</h1>
                <h1 className={GetOverallBlur(userLevel)}>{overall}</h1>
            </div>
        <ImprovementsContainer userlevel={userLevel} improvements={selfimprovementsComment} errors={errorsComment}></ImprovementsContainer>
      
      </div>
      ): (<div/>)
      }
      </div>
  )
}

export default Speaking
