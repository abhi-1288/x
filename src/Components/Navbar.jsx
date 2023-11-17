/* eslint-disable react/prop-types */

import ListIcon from '@mui/icons-material/List';
import MyFab from './Modules/MyFab';

const Navbar = (props) => {
    
    const userName = localStorage.getItem("username")

    return (
        <div className={`${props.className}`}>
            <nav className='bg-slate-400 flex space-x-2 p-2 justify-between items-center'>
                <div className='flex items-center space-x-2'>
                    <MyFab onClick={props.onClick} >
                        <ListIcon />
                    </MyFab>
                    <h1 className='text-white text-2xl '> META VERIFICATION CENTER </h1>
                </div>
                <ul className='flex'>
                </ul>
                <h2 className="text-lg text-black font-bold italic animate-pulse">welcome {userName}</h2>
            </nav>
        </div>
    )
}

export default Navbar