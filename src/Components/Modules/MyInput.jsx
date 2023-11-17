/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';


const MyInput = (props) => {
  return (
    <div>
      <TextField 
        type={props.type} 
        color='warning' 
        sx={{ background: "", input: {color: 'white'} }} 
        id="outlined-basic" 
        label={props.label} 
        value={props.value} 
        onChange={props.onChange} 
        variant="outlined" 
        focused 
      />
    </div>
  )
}

export default MyInput