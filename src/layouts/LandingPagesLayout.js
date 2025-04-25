import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingPagesLayout = (props) => {
  
  const { 
      lapname, 
      bgColour
  } = props
  
  return (
    <div id={ `${lapname}` }
    className={`vh-50 bg-${bgColour} pt4-00`}
>
    <header>
        <h2>{lapname} Landing Page</h2>
    </header>
    <main>
        <Outlet />
    </main>
</div>
  )
}

export default LandingPagesLayout
