import React from 'react'
import { Outlet } from 'react-router-dom'
import SharedLeft from '../Shared/SharedLeft'

const Main = () => {
  return (
    <div className='grid grid-cols-6'>
        <SharedLeft/>
        <div className='col-span-5'>
        <Outlet/>
        </div>
    </div>
  )
}

export default Main