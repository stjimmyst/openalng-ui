import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import NativeSelect from '@mui/material/NativeSelect';
import PropTypes from 'prop-types'

const DropDown = (props) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function generateList() {

    return props.choice_list.map(elem => {
      console.log(elem)
      return (<option value={elem}>{elem}</option>)
    })
  }

  return (
    // <Box sx={{ minWidth: 40 }}>
    //   <FormControl fullWidth>
    //     <NativeSelect
    //       defaultValue={30}
    //       inputProps={{
    //         name: 'age',
    //         id: 'uncontrolled-native',
    //       }}
    //     >
    //         {generateList()}
    //     </NativeSelect>
    //   </FormControl>
    // </Box>
    <select className="element">
      {generateList()}
    </select>

  );
}

DropDown.defaultProps = {
  choice_list: ["A", "B", "C"],
}

DropDown.propTypes = {
  choice_list: PropTypes.arrayOf(PropTypes.string),
}

export default DropDown