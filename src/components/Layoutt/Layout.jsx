import React from 'react'
import DashStats from './DashStats'
import Album from './Album'
import AddToken from './AddToken'

const Layout = () => {
  return (
    <div className="w-[1460px] h-[846px]">
        <DashStats/>
        <AddToken/>
        <Album/>
    </div>
  )
}

export default Layout
