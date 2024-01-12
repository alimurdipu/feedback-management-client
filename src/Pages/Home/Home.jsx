import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FirstPage from '../FirstPage/FirstPage'

const Home = () => {
  return (
    <div>
        {/* Navbar */}
        <div className="flex flex-row justify-center items-center gap-5">
            <NavLink to="/firstpage" className='border border-blue-500 p-3'>First Page</NavLink>
            <NavLink to="/secondpage" className='border border-blue-500 p-3'>Second Page</NavLink>
            <NavLink to="/thirdpage" className='border border-blue-500 p-3'>Third Page</NavLink>
            <NavLink to="/fourthpage" className='border border-blue-500 p-3'>Fourth Page</NavLink>
            <NavLink to="/fifthpage" className='border border-blue-500 p-3'>Fifth Page</NavLink>
        </div>
    </div>
  )
}

export default Home