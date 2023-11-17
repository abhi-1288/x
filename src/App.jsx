//App.jsx

import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Instagram from './Components/shortcut/Instagram';
import Facebook from './Components/shortcut/Facebook';
import InstagramForm from './Components/Developer/InstagramForm';
import FacebookForm from './Components/Developer/FacebookForm';
import InstagramUI from './Components/SystemUI/InstagramUI';
import FacebookUI from './Components/SystemUI/FacebookUI';
import InstaTextPage from './Components/SystemUI/InstaTextPage';
import FaceTextPage from './Components/SystemUI/FaceTextPage';
import Signup from './Components/auth/Signup';
import Login from './Components/auth/Login';
import Home from './Components/Home';
import Err from './Components/auth/Err';
import Dashboard from './Components/auth/Dashboard';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false);
  const excludePaths = [
    // '/instagramform',
    // '/facebookform',
    // '/insta-meta-form',
    // '/face-meta-form',
    // '/insta-page',
    // '/face-page',
    // '*',
    // '/',
  ];
  const form = !excludePaths.includes(window.location.pathname);
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem('authenticated') === 'true'
  );

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState(<ToastContainer />)

  const handleLogin = () => {
    const enteredUsername = formData.username;
    const enteredPassword = formData.password;
  
    // Remove existing user from localStorage (for demo purposes)
    localStorage.removeItem('users');
  
    // Use a demo user for demonstration purposes
    const demoUser = {
      username: 'Abhijeet_1289',
      password: 'R@Kw9952',
    };
  
    // Check if the entered credentials match the demo user
    const isUserValid =
      enteredUsername === demoUser.username &&
      enteredPassword === demoUser.password;
  
    if (isUserValid) {
      setError(
        toast.success('Login successful!', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      );
  
      // Store the username in localStorage
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('username', enteredUsername);
  
      setAuthenticated(true);
      navigate("/");
    } else {
      setError(
        toast.error('Invalid username or password', {
          position: 'bottom-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      );
    }
  };
  




  return (
    <div className="bg-slate-900 relative">
      {authenticated ?
        <>
          {form && <Navbar onClick={() => setSidebar(!sidebar)} />}
        </> : ""}
      <div className="flex justify-center">
        <div className="left-0 absolute z-10 ">
          {sidebar && <Sidebar setSidebar={setSidebar} />}
        </div>
        <Routes>
          {authenticated ? (
            <>
              <Route path="/instagram" element={<Instagram />} />
              <Route path="/insta-page" element={<InstaTextPage />} />
              <Route path="/face-page" element={<FaceTextPage />} />
              <Route path="/facebook" element={<Facebook />} />
              <Route path="/test" element={<Signup />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Err />} />
              <Route path="/login" element={<Login authenticated={authenticated} error={error} setError={setError} onLogin={handleLogin} formData={formData} setFormData={setFormData} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/instagramform" element={<InstagramForm />} />
              <Route path="/facebookform" element={<FacebookForm />} />
              <Route path="/insta-meta-form" element={<InstagramUI />} />
              <Route path="/face-meta-form" element={<FacebookUI />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login authenticated={authenticated} error={error} setError={setError} onLogin={handleLogin} formData={formData} setFormData={setFormData} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/instagramform" element={<InstagramForm />} />
              <Route path="/facebookform" element={<FacebookForm />} />
              <Route path="/insta-meta-form" element={<InstagramUI />} />
              <Route path="/face-meta-form" element={<FacebookUI />} />
              <Route path="*" element={<Err />} />
              <Route path="/" element={<Home />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
};

export default App;
