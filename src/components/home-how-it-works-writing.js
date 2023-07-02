import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import HomeHowItWorksContainerImage from './home-how-it-works-container-image'
import './home-how-it-works-writing.css'

const HomeHowItWorksWriting = (props) => {
  return (
    <div
      className={`home-how-it-works-writing-container ${props.rootClassName} `}
    >
      <div
        id="WritingContainer"
        className="home-how-it-works-writing-container1 OlContainerContent"
      >
        <div className="home-how-it-works-writing-container2">
          <h1 className="container-header-text">
            {props.HowItWorksHeading}
          </h1>
        </div>
        <div className="home-how-it-works-writing-container3">
          <h1 className="container-description-text">
            {props.HowItWorksDescription}
          </h1>
        </div>
        <div className="home-how-it-works-writing-container4">
          <HomeHowItWorksContainerImage
            rootClassName="home-how-it-works-container-image-root-class-name"
            className=""
          ></HomeHowItWorksContainerImage>
          <HomeHowItWorksContainerImage
            image_src="/external/typing-200h.png"
            description="Press the 'Estimate' button"
            rootClassName="home-how-it-works-container-image-root-class-name1"
            className=""
          ></HomeHowItWorksContainerImage>
          <HomeHowItWorksContainerImage
            image_src="/external/score-200h.png"
            description="Get your score!"
            rootClassName="home-how-it-works-container-image-root-class-name2"
            className=""
          ></HomeHowItWorksContainerImage>
        </div>
        <div className="home-how-it-works-writing-container5">
          <Link
            to="/writing"
            className="home-how-it-works-writing-navlink button"
          >
            {props.TryButton}
          </Link>
        </div>
      </div>
    </div>
  )
}

HomeHowItWorksWriting.defaultProps = {
  rootClassName: '',
  HowItWorksHeading: 'Writing: how it works?',
  HowItWorksDescription:
    'It takes seconds to generate a band score for your essay. And take minutes to fix errors.',
  TryButton: 'Write Now',
}

HomeHowItWorksWriting.propTypes = {
  rootClassName: PropTypes.string,
  HowItWorksHeading: PropTypes.string,
  HowItWorksDescription: PropTypes.string,
  TryButton: PropTypes.string,
}

export default HomeHowItWorksWriting
