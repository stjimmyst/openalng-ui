import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types'

import CardResult from './card-result'
import './speaking-result-container.css'
import { getCardColor,GetStubText } from './functions.js';
import Cookies from 'js-cookie';
import ImprovementsContainer from '../components/improvements-container'
import ImprovementCard from './improvement-card'
import Overall from './ovevrall';

const SpeakingResultContainer = (props) => {
  
  const [userLevel, setUserLevel] = useState(0)
  const [transcription, setTranscription] = useState("this is default transcription")
  const [fcScore, setFcScore] = useState(4)
  const [lrScore, setLrScore] = useState(4)
  const [graScore, setGraScore] = useState(4)
  const [pScore, setPScore] = useState(4)
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

  useEffect(() => {
    let data = Cookies.get('speakingestimation')
    if (typeof(data) != 'undefined') {
    const estimation = JSON.parse(data)
    console.log(estimation)
    setUserLevel(estimation.body.level)
    setFcScore(estimation.body.fc.band)
    setLrScore(estimation.body.lr.band)
    setGraScore(estimation.body.gra.band)
    setPScore(estimation.body.p.band)
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
    setOverall(Math.round(((parseInt(fcScore) + parseInt(pScore) + parseInt(graScore) + parseInt(lrScore)) / 4) * 2) / 2)
  } else {
    console.log("Speaking cookie not defined")
  }
  }, [])

  return (
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
      <Overall userlevel={userLevel} overall={overall}></Overall>
      <ImprovementsContainer userlevel={userLevel} improvements={selfimprovementsComment} errors={errorsComment}></ImprovementsContainer>
    
    </div>
  )
}

SpeakingResultContainer.defaultProps = {
  rootClassName: '',
}

SpeakingResultContainer.propTypes = {
  rootClassName: PropTypes.string,
  userlevel: PropTypes.number
}

export default SpeakingResultContainer
