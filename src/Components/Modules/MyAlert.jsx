/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import Alert from '@mui/material/Alert';

const MyAlert = (props, { removeAlert }) => {


  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000);
    return () => clearTimeout(timeout);
  }, [removeAlert])

  return (
    <div>
        <Alert severity={props.type}>
            {props.text}
        </Alert>
    </div>
  )
}

export default MyAlert