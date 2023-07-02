import React from 'react'

import PropTypes from 'prop-types'

import './container-text-result.css'

const ContainerTextResult = (props) => {
  return (
    <div className={props.rootClassName}>
      {/* <h1 className='ComentText'>{props.comment}</h1> */}
      <textarea
        value={props.comment}
        className={props.stub ? ("container-text-result-textarea textarea blured"):("container-text-result-textarea textarea")}
      ></textarea>
      
    </div>
  )
}

ContainerTextResult.defaultProps = {
  rootClassName: '',
  comment: 'sometext',
  blured: false
}

ContainerTextResult.propTypes = {
  rootClassName: PropTypes.string,
  comment: PropTypes.string,
  blured: PropTypes.bool
}

export default ContainerTextResult
