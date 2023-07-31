import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';
import PropTypes from 'prop-types'

const DropDown = (props) => {

  function generateList(items, id) {
    return items.map(elem => {
      return (<option value={elem}>{elem}</option>)
    })
  }

  return (
    <select className="readingquestion element" id={props.item_uuid} data-item_number={props.item_number}>
      <option value="select" disabled selected hidden></option>
      {generateList(props.item_values)}
    </select>

  );
}

DropDown.defaultProps = {
  item_uuid: "id",
  item_number: 1,
  item_values: ["A", "B", "C"],
}

DropDown.propTypes = {
  item_uuid: PropTypes.string,
  item_number: PropTypes.number,
  item_values: PropTypes.arrayOf(PropTypes.string),
}

export default DropDown