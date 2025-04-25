import React from 'react'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className='container container90 flex flex-column pt4-00 min-vh-60'
    >
        <h1>Styleguide</h1>
        <div className='flex flex-column justify-around items-center 
            h-100'
        >
            <div>
                <Link to='atoms'><h2>Atoms</h2></Link>
            </div>
            <div>
                <Link to='molecules'><h2>Molecules</h2></Link>
            </div>
            <div>
                <Link to='organisms'><h2>Organisms</h2></Link>
            </div>
            <div>
                <Link to='templates'><h2>Templates</h2></Link>
            </div>
        </div>
    </div>
  )
}

export default Index