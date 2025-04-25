import facebook from '../../svgs/socialMedia/facebook.svg'
import twitter from '../../svgs/socialMedia/twitter.svg'
import linkedin from '../../svgs/socialMedia/linkedin.svg'
import youtube from '../../svgs/socialMedia/youtube.svg'
// import { useState } from 'react'
const SocialNavigation = () => {

    const mainNav= [
        {
            id : 1,
            icon : facebook,
            url : 'https://www.facebook.com'
        },
        {
            id : 2,
            icon : twitter,
            url : 'https://www.twitter.com'
        },
        {
            id : 3,
            icon : linkedin,
            url : 'https://www.linkedin.com'
        },
        {
            id : 4,
            icon : youtube,
            url : 'https://www.youtube.com'
        },
    ]

    return (
        <ul className="flex justify-between items-center 
            mb0-00-m w-100 pa0-25 ba b--white-50"
        >
            {mainNav.map((a)=>{
                        return (
                            <li key={a.id} 
                                className="mb0-00"
                            >
                                <a href = {a.url}
                                    className="flex justify-center blue0 items-center"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <figure className="ba br-100 mh0-25"
                                    >
                                        <img src={a.icon}
                                            className="w1-25 h1-25 pa0-25"
                                            alt={a.url}
                                        />
                                    </figure>
                                </a>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}

export default SocialNavigation