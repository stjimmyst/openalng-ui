import React from 'react'

import PropTypes from 'prop-types'

import ImprovementCard from './improvement-card'

const ImprovementsContainer = (props) => {
  let bl = true
  let stubtext = ""
  if (props.userlevel == 0) {
    stubtext="Please LogIn to see results"
  } else if (props.userlevel == 1) {
    stubtext="Not avaliable in your plan"
  } else {
    bl=false
  }

  return (
    
    <div className={`improvements-container-container`}>
      <ImprovementCard
        header="Errors and grammatics"
        rootClassName="improvement-card-root-class-name1"
        className=""
        comment={props.errors}
        stub={bl}
        stubText={stubtext}
      ></ImprovementCard>
      <ImprovementCard
        header="Improvement"
        rootClassName="improvement-card-root-class-name"
        className=""
        comment={props.improvements}
        stub={bl}
        stubText={stubtext}
      ></ImprovementCard>
    </div>
  )
}

ImprovementsContainer.defaultProps = {
  rootClassName: '',
  improvements: "no data from server",
  errors: "no data from server",
  userlevel: 0,

}

ImprovementsContainer.propTypes = {
  rootClassName: PropTypes.string,
  improvements: PropTypes.string,
  errors: PropTypes.string,
  userlevel: PropTypes.number,
}

export default ImprovementsContainer
