import { useState } from 'react';
import { Container, Typography, TextField, Button, CssBaseline } from '@mui/material';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Container component="main" maxWidth="xs" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: "20px", padding: "20px", marginTop: '8vh', textAlign: 'center' }}>
      <CssBaseline />
      <div>
        <Typography component="h1" sx={{ fontWeight: 'bold' }} variant="h5">
          Sign Up
        </Typography>
        <form style={{ width: '100%', marginTop: '3vh' }} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoFocus
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '3vh 0 2vh' }}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
