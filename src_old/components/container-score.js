import React from 'react'

import PropTypes from 'prop-types'

import './container-score.css'

const ContainerScore = (props) => {
  return (
    <div className={`container-score-container ${props.rootClassName} `}>
      <h1 className="OLHeader2">{props.score}</h1>
    </div>
  )
}

ContainerScore.defaultProps = {
  rootClassName: '',
  score: 6,
}

ContainerScore.propTypes = {
  rootClassName: PropTypes.string,
  score: PropTypes.number,
}

export default ContainerScore
