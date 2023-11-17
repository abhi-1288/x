/* eslint-disable react/prop-types */
import { Fab } from '@mui/material'

const MyFab = (props) => {
    return (
        <div>
            <Fab color={props?.color || "primary" } onClick={props.onClick} aria-label="add">
                {props.children}
            </Fab>
        </div>
    )
}

export default MyFab