//Dashboard.jsx

import { useState } from 'react';
import { Button, Container, Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
    const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem('authenticated', 'false');
    // Use the Navigate component to redirect the user to the login page
    location.reload();
    
    navigate('/');
  };

  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
  });

  const handleCreateUser = () => {
    // Get the existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Create a new user object with a unique ID
    const user = {
      id: Date.now(),
      ...newUser,
    };

    // Update the list of users
    const updatedUsers = [...existingUsers, user];

    // Save the updated list of users to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Reset the form
    setNewUser({
      username: '',
      password: '',
    });

    toast.success('User created successfully!', {
        position: 'bottom-right',
        autoClose: 3000, // Auto close the notification after 3000 milliseconds (3 seconds)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="md" className="my-8">
        {/* ToastContainer for notifications */}
      {/* <ToastContainer /> */}
      <Typography variant="h4" color="HighlightText" gutterBottom>
        Welcome to the Dashboard
      </Typography>
      {/* Your dashboard content goes here */}

      {/* Logout Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogout}
        className="mt-4"
      >
        Logout
      </Button>

      <h3 className='text-xl text-center text-white'>New User Create</h3>

       {/* User Creation Form */}
       <form className="bg-slate-600 p-4 rounded-md m-10">
        <TextField
          label="Username"
          name="username"
          sx={{ fontColor: "red" }}
          value={newUser.username}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          value={newUser.password}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateUser}
          className="mt-4"
        >
          Create User
        </Button>
      </form>

      

    </Container>
  );
};

export default Dashboard;
