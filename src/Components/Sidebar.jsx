/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const Sidebar = ({ setSidebar }) => {
  return (
    <div className='grid bg-slate-400 p-3 w-40 h-screen'>
      <div className='flex flex-col space-y-4'>
        <Link onClick={() => setSidebar(false)} className='bg-slate-500 hover:bg-slate-300 text-xl font-semibold italic hover:underline hover:underline-offset-2 rounded-md p-2' to="/instagram" >Instagram</Link>
        <Link onClick={() => setSidebar(false)} className='bg-slate-500 hover:bg-slate-300 text-xl font-semibold italic hover:underline hover:underline-offset-2 rounded-md p-2' to="/facebook" >Facebook</Link>
        <Link onClick={() => setSidebar(false)} className='bg-slate-500 hover:bg-slate-300 text-xl font-semibold italic hover:underline hover:underline-offset-2 rounded-md p-2' to="/dashboard" >DASHBOARD</Link>
      </div>
    </div>
  )
}

export default Sidebar