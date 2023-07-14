import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types'

import ContainerHeader from './container-header'
import ContainerTextResult from './container-text-result'

const Improvements = (props) => {

    if (props.userlevel <=1) {
        return (<div />)
    } else {

        return (
            <div className="improvement-card-container">
      <ContainerHeader
        rootClassName="container-header-root-class-name"
        className=""
        header={props.header}
      ></ContainerHeader>
      <ContainerTextResult
        rootClassName="container-text-result-container-improvements"
        className=""
        comment={props.comment}
      ></ContainerTextResult>
    </div>
        )
    }

}

Improvements.defaultProps = {
    userlevel: 0,
    comment: "no value from the server"
}

Improvements.propTypes = {
    userlevel: PropTypes.number,
    comment: PropTypes.string
}

export default Improvements