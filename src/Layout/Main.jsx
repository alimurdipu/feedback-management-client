import React from 'react'
import { Outlet } from 'react-router-dom'
import SharedLeft from '../Shared/SharedLeft'

const Main = () => {
  return (
    <div className='md:flex'>
        <SharedLeft/>
        <div className='flex-col md:flex-1 lg:flex-1'>
        <Outlet/>
        </div>
    </div>
  )
}

export default Main