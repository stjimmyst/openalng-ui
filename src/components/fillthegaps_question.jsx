import * as React from 'react';
import { FillInTheGapsSplitter } from './functions';
import PropTypes from 'prop-types'

const FillTheGapsQuestion = (props) => {
  function processInput() {
    const splitter = `${FillInTheGapsSplitter}${props.item_uuid}`;
    const blocks = props.question_text.split(splitter);
    const rowLen = blocks.length;
    return blocks.map((elem,i) => {
      return (
        <>
          <div className="text-block">
            <>{elem}</>
          </div>
          {i+1 != rowLen ?(<div className="gap">
            <input className="readingquestion element" type="text" id={props.item_uuid} data-item_number={props.item_number}></input>
          </div>):(<></>)}
        </>
      )
    })
  }

  return (
    processInput()
  );
}

FillTheGapsQuestion.defaultProps = {
  item_uuid: "questionid",
  item_number: 1,
  question_text: "Some text with the replacement and user text input __questionid for fill the gaps",
}

FillTheGapsQuestion.propTypes = {
  item_uuid: PropTypes.string,
  item_number: PropTypes.number,
  question_text: PropTypes.string,
}

export default FillTheGapsQuestion