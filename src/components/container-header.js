import React from 'react'

import PropTypes from 'prop-types'

import './container-header.css'

const ContainerHeader = (props) => {
  return (
    <div className={`container-header-container ${props.rootClassName} `}>
      <h1 className="Heading">{props.header}</h1>
    </div>
  )
}

ContainerHeader.defaultProps = {
  rootClassName: '',
  header: 'Task Achevements',
}

ContainerHeader.propTypes = {
  rootClassName: PropTypes.string,
  header: PropTypes.string,
}

export default ContainerHeader
