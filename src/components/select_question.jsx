import * as React from 'react';
import { FillInTheGapsSplitter } from './functions';
import PropTypes from 'prop-types'

const SelectQuestion = (props) => {
  function processInput() {
    return Object.keys(props.item_values).map((key, val) => {
      return (
          <div className="select">
            <p><strong>{key}</strong></p>
            <input className="readingquestion element" type="radio" name={props.item_uuid} id={props.item_uuid} value={key} data-item_number={props.item_number}/>
            {props.item_values[key]}
          </div>)
      
    })
  }

  return (<>
  <form>
    {processInput()}
    </form>
    </>
  );
}

SelectQuestion.defaultProps = {
  item_uuid: "question_id",
  item_number: 2,
  question_text: "Text question",
  item_values: 
    {
        "A":"Children",
        "B":"Children1",
        "C":"Children2",
        "D":"Children3"
    },
}

SelectQuestion.propTypes = {
  item_uuid: PropTypes.string,
  item_number: PropTypes.number,
  item_values: PropTypes.object,
}

export default SelectQuestion