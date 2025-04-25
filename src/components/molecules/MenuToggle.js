import menuClose from '../../svgs/menu/close-svgrepo-com_1.svg'
import menuOpen from '../../svgs/menu/burger-menu-svgrepo-com.svg'

const MenuToggle = (props) => {
    // Props
    const {onClick, toggleMenu} = props

    return (
        <figure id="menu__Toggle"
            className="flex items-center justify-center 
                w2-00 h2-00 dn-m ba br0-25
                "
            onClick={onClick}
            title = "Menu Toggle"
        >
            <img src = {toggleMenu ? menuOpen : menuClose}
                alt="Menu Toggle"
                className="pa0-25"
            />
        </figure>
    )
}

export default MenuToggle