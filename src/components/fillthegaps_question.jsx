import * as React from 'react';
import { FillInTheGapsSplitter } from './functions';
import PropTypes from 'prop-types'

const FillTheGapsQuestion = (props) => {

  const [answer, setAnswer] = React.useState('');

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  function processInput() {
    const blocks = props.question_text.split(FillInTheGapsSplitter);
    const rowLen = blocks.length;
    return blocks.map((elem,i) => {
      return (
        <>
          <div className="text-block">
            <>{elem}</>
          </div>
          {i+1 != rowLen ?(<div className="gap">
            <input className="element" type="text" id="name"></input>
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
  question_text: "Some text with the replacement and user text input __FILLTHEGAPS__ for fill the gaps ",
}

FillTheGapsQuestion.propTypes = {
  question_text: PropTypes.string,
}

export default FillTheGapsQuestion