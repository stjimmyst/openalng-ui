import * as React from 'react';
import { FillInTheGapsSplitter } from './functions';
import PropTypes from 'prop-types'

const FillTheGapsStyledText = (props) => {

  const [answer, setAnswer] = React.useState('');

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  function stringToMarkup() {
    // let tmp = props.question_text.split("\n")
    // return tmp.map(element => {
    //     return (<div dangerouslySetInnerHTML={{__html: element}} />)
    // });
    return <div dangerouslySetInnerHTML={{__html: processInput()}} />
  }

  function processInput() {
    const blocks = props.question_text.split(FillInTheGapsSplitter);
    const rowLen = blocks.length;
    var tmp_string = ""
    for (var i = 0; i < rowLen; i++) {
      tmp_string += blocks[i]
      if (i != rowLen-1) {
        tmp_string +="<b>3</b><input class=\"question-item-gaps-styled-element\" type=\"text\"></input>"
      }
    }
    return tmp_string
  }

  return (
    stringToMarkup()
  );
}

FillTheGapsStyledText.defaultProps = {
  question_text: '<h1>Some header text question</h1><br><p1>par1</p1><br><p>put your text here __FILLTHEGAPS__ </p> and here __FILLTHEGAPS__'
}

FillTheGapsStyledText.propTypes = {
  question_text: PropTypes.string,
}

export default FillTheGapsStyledText