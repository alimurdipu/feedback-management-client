import React from 'react'
import { Outlet } from 'react-router-dom'
import SharedLeft from '../Shared/SharedLeft'

const Main = () => {
  return (
    <div className='flex'>
        <SharedLeft/>
        <Outlet/>
    </div>
  )
}

export default Main