import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import HomeHowItWorksContainerImage from './home-how-it-works-container-image'
import './home-how-it-works-speaking.css'

const HomeHowItWorksSpeaking = (props) => {
  return (
    <div
      className={`home-how-it-works-speaking-container ${props.rootClassName} `}
    >
      <div
        id="SpeakingContainer"
        className="OlContainerContent"
      >
        <div className="home-how-it-works-speaking-container2">
          <h1 className="container-header-text">
            {props.HowItWorksHeading}
          </h1>
        </div>
        <div className="home-how-it-works-speaking-container3">
          <h1 className="container-description-text">
            {props.HowItWorksDescription}
          </h1>
        </div>
        <div className="home-how-it-works-speaking-container4">
          <HomeHowItWorksContainerImage
            description="Get speaking topic"
            rootClassName="home-how-it-works-container-image-root-class-name3"
            className=""
          ></HomeHowItWorksContainerImage>
          <HomeHowItWorksContainerImage
            image_src="/external/record-200h.png"
            description="Record your answer"
            rootClassName="home-how-it-works-container-image-root-class-name4"
            className=""
          ></HomeHowItWorksContainerImage>
          <HomeHowItWorksContainerImage
            image_src="/external/score-200h.png"
            description="Get your score!"
            rootClassName="home-how-it-works-container-image-root-class-name5"
            className=""
          ></HomeHowItWorksContainerImage>
        </div>
        <div className="home-how-it-works-speaking-container5">
        <Link
            to="/speaking"
            className="home-how-it-works-writing-navlink button"
          >
            {props.TryButton}
          </Link>
        </div>
      </div>
    </div>
  )
}

HomeHowItWorksSpeaking.defaultProps = {
  HowItWorksHeading: 'Speaking: how it works?',
  TryButton: 'Speak Now',
  rootClassName: '',
  HowItWorksDescription: 'Practice your speaking with virtual examiner',
}

HomeHowItWorksSpeaking.propTypes = {
  HowItWorksHeading: PropTypes.string,
  TryButton: PropTypes.string,
  rootClassName: PropTypes.string,
  HowItWorksDescription: PropTypes.string,
}

export default HomeHowItWorksSpeaking
