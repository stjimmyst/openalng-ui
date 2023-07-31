import * as React from 'react';
import { FillInTheGapsSplitter } from './functions';
import PropTypes from 'prop-types'
import ReadingContext from './context/reading-context';
import { useContext } from 'react';
import ReactDOMServer from "react-dom/server";



const FillTheGapsStyledText = (props) => {

  function stringToMarkup() {
    return <div dangerouslySetInnerHTML={{__html: processInput()}} />
  }

  function generateItem(item) {
    return (
      <>
      <b>{item.item_number}</b>
      <input class="readingquestion question-item-gaps-styled-text-element" type="text" id={item.item_uuid} data-item_number={item.item_number}></input>
      </>
    )
  }

  function processInput() {
    var tmp_markdown = props.question_markdown
    const rowLen = props.items.length;
    var tmp_string = ""
    for (var i = 0; i < rowLen; i++) {
      const blocks = String(tmp_markdown).split(`${FillInTheGapsSplitter}${props.items[i].item_uuid}`);
      console.log()
      tmp_string += blocks[0]
      // tmp_string +="<b>("+props.items[i].item_number+")</b><input class=\"question-item-gaps-styled-text-element\" type=\"text\"></input>"
      tmp_string +=ReactDOMServer.renderToString(generateItem(props.items[i]))
      tmp_markdown = blocks[1]
    }
    return tmp_string
  }

  return (
    stringToMarkup()
  );
}

FillTheGapsStyledText.defaultProps = {
  items: [
    {
      item_number: 5,
      item_uuid: "uuid5",
      item_text: ""
    },
    {
      item_number: 6,
      item_uuid: "uuid6",
      item_text: ""
    }
  ],
  question_markdown: '<h1>Some header text question</h1><br><p1>par1</p1><br><p>put your text here __uuid5 </p> and here __uuid6'
}

FillTheGapsStyledText.propTypes = {
  question_markdown: PropTypes.string,
  items: PropTypes.array,
  item_number: PropTypes.number,
  item_uuid: PropTypes.string,

}

export default FillTheGapsStyledText