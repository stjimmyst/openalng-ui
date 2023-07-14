import React from 'react'

import PropTypes from 'prop-types'

import ContainerHeader from './container-header'
import ContainerTextResult from './container-text-result'

const ImprovementCard = (props) => {
  return (
    <div className="improvement-card-container">
      {
        props.stub ? (<div className="improvement-card-container-blured">
        <h1 className="Heading blured-text">{props.stubText}</h1>
        </div>):(<div/>)
      }
      <ContainerHeader
        rootClassName="container-header-root-class-name"
        className=""
        header={props.header}
      ></ContainerHeader>
      <ContainerTextResult
        rootClassName="container-text-result-container-improvements"
        className=""
        comment={props.comment}
        stub = {props.stub}
      ></ContainerTextResult>
    </div>
  )
}

ImprovementCard.defaultProps = {
  header: 'Task Achievement',
  rootClassName: '',
  comment: "no data from server",
  stub: false
}

ImprovementCard.propTypes = {
  header: PropTypes.string,
  rootClassName: PropTypes.string,
  comment: PropTypes.string,
  stub: PropTypes.bool,
  stubText: PropTypes.string
}

export default ImprovementCard
