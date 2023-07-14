import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types'

import CardResult from './card-result'
import './writing-result-container.css'
import Cookies from 'js-cookie';
import './functions.js'
import { getCardColor, GetStubText } from './functions.js';
import ImprovementsContainer from '../components/improvements-container'
import ImprovementCard from './improvement-card'
import Overall from './ovevrall';

const WritingResultContainer = (props) => {
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

  useEffect(() => {
    let data = Cookies.get('writingestimation')
    if (typeof(data) != 'undefined') {
      const estimation = JSON.parse(data)
      console.log(estimation)
      setUserLevel(estimation.body.level)
      setTaScore(estimation.body.ta.band)
      setCcScore(estimation.body.cc.band)
      setLrScore(estimation.body.lr.band)
      setGraScore(estimation.body.gra.band)
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
      setOverall(Math.round(((parseInt(taScore) + parseInt(ccScore) + parseInt(graScore) + parseInt(lrScore)) / 4) * 2) / 2)
    } else {
      console.log("cookie not set!")
    }
  }, [])
  return (
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
      <Overall userlevel={userLevel} overall={overall}></Overall>
      <ImprovementsContainer userlevel={userLevel} improvements={selfimprovementsComment} errors={errorsComment}></ImprovementsContainer>
    </div>
  )
}

WritingResultContainer.defaultProps = {
  rootClassName: '',
}

WritingResultContainer.propTypes = {
  rootClassName: PropTypes.string,
  userlevel: PropTypes.number
}

export default WritingResultContainer
