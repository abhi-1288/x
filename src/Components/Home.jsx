//Home.jsx

import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex justify-center items-center m-4'>
            <div className='grid items-center space-y-7'>
                <div className='flex justify-center items-center'>
                    <img src="icons8-meta-100.png" alt="" />
                </div>
                <Typography variant="h3" sx={{ textAlign: "center", color: 'blue' }} color="" paragraph>
                    LOGIN with your VERIFIED META Accounts.
                </Typography>

                <Button
                    component={Link}
                    to="/login"
                    variant="contained"
                    color="primary"
                    size="medium"
                    style={{ marginTop: '20px' }}
                >
                    LOGIN
                </Button>
                <div className="flex space-x-2">
                <img src="meta-facebook2.png" alt="?" className='' />
            </div>
            </div>
        </div>
    )
}

export default Home