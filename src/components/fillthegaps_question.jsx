import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FillInTheGapsSplitter } from './functions';
import PropTypes from 'prop-types'

const FillTheGapsQuestion = (props) => {

  const [answer, setAnswer] = React.useState('');

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  function processInput() {
    const blocks = props.question_text.split(FillInTheGapsSplitter);
    return blocks.map(elem => {
      console.log(elem)
      return (
        <>
        <div className='question-item-text-part'>
        {elem}
        </div>
        
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100px', height: '100px' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" variant="standard" />
    </Box>
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