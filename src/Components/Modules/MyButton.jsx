/* eslint-disable react/prop-types */

import Button from '@mui/material/Button';

const MyButton = (props) => {
  return (
    <div>
      <Button variant="contained" href={props.href} target={props.target} disabled={props.disabled} type={props.type} onClick={props.onClick} color={props.color}>
        {props.children}
      </Button>
    </div>
  )
}

export default MyButton