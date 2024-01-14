import React from 'react'
import { Outlet } from 'react-router-dom'
import SharedLeft from '../Shared/SharedLeft'

const Main = () => {
  return (
    <div className='flex'>
        <SharedLeft/>
        <div className='flex-1'>
        <Outlet/>
        </div>
    </div>
  )
}

export default Main