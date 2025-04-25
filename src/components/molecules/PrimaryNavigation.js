import { NavLink } from 'react-router-dom'
import first from '../../images/_partials/logos/kda_design_technologies_logo.jpg'
import second from '../../images/placeholders/regular_images/square-01.png'
import third from '../../images/placeholders/portrait/portrait-01.jpg'


const  PrimaryNavigation = (props) => {

    const mainNav= [
        {
            id : 1,
            name :'Projects',
            icon : first,
            url : 'projects/'
        },
        {
            id : 3,
            name :'Services',
            icon : third,
            url : 'services/'
        },
        {
            id : 2,
            name :'info',
            icon : second,
            url : 'info/'
        },
    ]

    const {onClick} = props;
    
    return (
        <ul className="flex-column items-center justify-between 
            flex-m justify-start-m w-100
            flex-row-m white-90 pa2-00 pb0-00 pa0-25-m ba b--white-50"
        >
            {mainNav.map((a)=>{ return (
                        <li key={a.id} 
                            className="mb2-00 mh0-50-m mv0-00-m ba b--white-50 "
                            onClick={onClick}
                        >
                            <NavLink to = {a.url}
                                className="f0-75 flex items-center white-80 pb0-00-m ma0-25"
                            >
                                
                                <img src={a.icon}
                                    className="w1-25 h1-25 br0-25 ba b--blue0 bw1 cover"
                                    alt={a.prefix + a.name}
                                />

                                <div className="ml0-50"
                                >
                                    <span className="blue0 f1-00 b--white-50 w-100"
                                    >
                                        {a.name}
                                    </span>
                                </div>
                            </NavLink>
                        </li>
                        )
                    }
                )
            }
        </ul>
    )
}

export default PrimaryNavigation