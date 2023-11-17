/* eslint-disable react/prop-types */
//Login.jsx

import {
  Container,
  Typography,
  TextField,
  Button,
  CssBaseline,
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({  error, onLogin, formData, setFormData }) => {


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Call the onLogin function with entered credentials
    onLogin(formData.username, formData.password);
    
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '20px',
        padding: '20px',
        marginTop: '8vh',
        textAlign: 'center',
      }}
    >
       
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h4" fontWeight="bold">
          Login
        </Typography>
        <form style={{ width: '100%', marginTop: '3vh' }} onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={formData.username}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            error
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '3vh 0 2vh' }}
          >
            Login
          </Button>
          {error && <Typography color="error"><ToastContainer /></Typography>}
        </form>
      </div>
    </Container>
  );
};

export default Login;
