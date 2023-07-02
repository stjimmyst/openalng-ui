import React from 'react';
import PropTypes from 'prop-types'

const Overall = (props) => {

    function GetOverallBlur(userlevel) {
        if (userlevel > 0) {
            return "Heading"
        } else {
            return "Heading blured"
        }
    }

        return (
            <div className="overall-container-container">
                <h1 className="Heading">Overall:</h1>
                <h1 className={GetOverallBlur(props.userlevel)}>{props.overall}</h1>
            </div>
        )

}

Overall.defaultProps = {
    userlevel: 0,
    overall: 5
}

Overall.propTypes = {
    userlevel: PropTypes.number,
    overall: PropTypes.number
}

export default Overall