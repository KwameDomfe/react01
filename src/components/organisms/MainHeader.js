import { useState } from 'react'
import Logo from '../molecules/Logo'
import MenuToggle from '../molecules/MenuToggle'
import PrimaryNavigation from '../molecules/PrimaryNavigation'
import SecondaryNavigation from '../molecules/SocialNavigation'
import UserAccounts from '../molecules/UserAccounts'
import { Link } from 'react-router-dom'


const MainHeader = () => {

    // UseState Variables
    const [toggleMenu, SetToggleMenu] = useState(true)

    /* Custom Functions */
    const handleToggleMenu = () => {SetToggleMenu(!toggleMenu)};
   
    return (
        <article id="xxx-MainHeader"
            className={`flex items-center justify-center
                w-100 w-100-m ${toggleMenu ? "h4-00" : "h-100"} of-hidden h4-00-m
                pv0-25 mb2-00 bg-white
                fixed z-5`}
        >
            <div id="xxx-MainHeader--content"
                className="flex flex-column flex-row-m items-center
                    justify-start h-100
                    container container90 
                    "
            >
                <section id="xxx-MainHeader--LogoAndMenuToggle"
                    className="flex justify-between items-center 
                        w-100 w-40-m 

                        mb1-50 mb0-00-m pa0-25 pv0-50-m ba b--white-50"
                > 
                    <Link to = "/"
                        className="white-90"
                    >
                        <Logo />
                    </Link>
                    <MenuToggle
                        toggleMenu={toggleMenu} 
                        onClick={handleToggleMenu}
                    />
                </section>
                
                <section id="xxx-MainHeader--NavigationAndUserAccounts"
                    className="flex flex-column justify-around items-center  
                    flex-row-m justify-between-m
                    w-100
                    pa2-00 pa0-25-m
                    bg-white-2
                    ba b--white-50"
                >
                    <nav className="flex items-center justify-center
                        ma2-00 pa2-00
                        pa0-25-m mb0-00-m mt0-00-m 
                        ba b--white-50 w-100"
                    >
                        <PrimaryNavigation onClick = {handleToggleMenu}/>
                    </nav>
                    <nav className="flex-l justify-center mb4-00 mb0-00-m ba b--white-50 pa2-00 pa0-25-m"
                    >
                        <SecondaryNavigation />
                    </nav>
                    <article className="flex-m mb4-00 mb0-00-m pa0-25 ba b--white-50"
                    >
                        <UserAccounts />
                    </article>
                </section>

            </div>
        </article>
    )
  }
  
export default MainHeader