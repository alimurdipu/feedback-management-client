import React from 'react'
import Home from '../Pages/Home/Home'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Main