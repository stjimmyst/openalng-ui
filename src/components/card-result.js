import React from 'react'

import PropTypes from 'prop-types'

import ContainerHeader from './container-header'
import ContainerScore from './container-score'
import ContainerTextResult from './container-text-result'
import './card-result.css'

const CardResult = (props) => {
  
  return (
    <div className={`card-result-container ${props.rootClassName} `}>
      {
        props.stub ? (<div className="card-result-container-blured">
        <h1 className="Heading blured-text">{props.stubText}</h1>
        </div>):(<div/>)
      }
      {/* + props.stub ? (" blured"):("") */}
      <ContainerHeader
        rootClassName={props.stub ? ("container-header-root-class-name blured"):("container-header-root-class-name")}
        className=""
        header={props.header}
      ></ContainerHeader>
      <ContainerScore
        rootClassName={props.stub ? ("container-score-root-class-name blured"):("container-score-root-class-name")}
        className=""
        score={props.score}
      ></ContainerScore>
      <ContainerTextResult
        className=""
        comment={props.comment}
        stub = {props.stub}
        rootClassName = "container-text-result-container"
      ></ContainerTextResult>
    </div>
  )
}

CardResult.defaultProps = {
  rootClassName: '',
  header: 'Task Achievement',
  score: 6,
  comment: 'mytext',
  stub: false,
  stubText: "Not avaliable"
}

CardResult.propTypes = {
  rootClassName: PropTypes.string,
  header: PropTypes.string,
  score: PropTypes.number,
  comment: PropTypes.string,
  stub: PropTypes.bool,
  stubText: PropTypes.string
}

export default CardResult
