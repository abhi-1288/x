//Err/jsx

import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Err = () => {
    return (
        <Container
            component="main"
            maxWidth="md"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '80vh',
                textAlign: 'center',
            }}
        >
            <div className='md:flex grid md:justify-center items-center'>
                <img src="icons8-meta-100.png" alt="?" className='mx-4 flex ' />
                <Typography variant="h1" sx={{ color: 'blue' }} gutterBottom>
                    404
                </Typography>
            </div>

            <Typography variant="h5" sx={{ color: 'blue' }} color="HighlightText" paragraph>
                Oops! The page you are looking for might be in another castle.
            </Typography>
            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                size="large"
                style={{ marginTop: '20px' }}
            >
                Go to Home
            </Button>
        </Container>
    );
};

export default Err;
