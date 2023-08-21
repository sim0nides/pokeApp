import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="py-10 mx-auto max-w-screen-lg">
      <Outlet />
    </div>
  )
}

export default Layout
