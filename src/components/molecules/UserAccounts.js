import React from 'react'
import { Link } from 'react-router-dom'

const UserAccounts = () => {
  return (
    <div className="pa0-25 br0-50
        bg-white-50 f0-75 ba b--gold"
    >
        {/* <div className="pv0-25 ph1-00 bg-black-40 br0-25 b--white ttu mh0-50">
            <Link to="" 
                className='white-90 b'
            >
                Register
            </Link>
        </div> */}
        <div className="bg-gold br0-25 pv0-25 ph0-50 ttu">
            <Link to="/accounts/login"
                className="white-90 b"
            >
            Login
            </Link>
        </div> 
    </div>
  )
}

export default UserAccounts