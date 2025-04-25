import React from 'react'
import { Link } from 'react-router-dom'

export default function _404() {

    return (
        <div id='40'
            className='pt4-00'
        >
            <h2>
                Page Not Found !!!
            </h2>
            <p>
                Lorem dd CSS files. In the simplest case, you’ll add a tag to your HTML. If you use a build tool or a framework, consult its documentatie to your project.
            </p>
            <p>
                Go to the 
                <Link to = "/"
                    className="gold"
                >
                Homepage
                </Link>.
            </p>
            
        </div>
    )
}
