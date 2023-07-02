import React from 'react'

import PropTypes from 'prop-types'

import './home-how-it-works-container-image.css'

const HomeHowItWorksContainerImage = (props) => {
  return (
    <div
      className={`home-how-it-works-container-image-container ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="home-how-it-works-container-image-image image"
      />
      <h1 className="container-description-image-text">
        {props.description}
      </h1>
    </div>
  )
}

HomeHowItWorksContainerImage.defaultProps = {
  description: 'Type or paste your essay',
  image_src: '/external/topic-200h.png',
  rootClassName: '',
  image_alt: 'image',
}

HomeHowItWorksContainerImage.propTypes = {
  description: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default HomeHowItWorksContainerImage
