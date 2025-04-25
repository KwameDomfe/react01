import logo from '../../images/horizontal-mark2.png'

const Logo = () => {
    
    return (
    
        <figure id="m__logo"
            className="flex items-center justify-center ttu ba b--white-40 pa0-25"
        >
            <img src={logo}
                alt="Company Logo"
                className="w2-50 h2-50 ba b--white-40 pa0-25"
            />
            <figcaption 
                className="db-l ml0-25 blue0 b--white-40 ba"
            >   
                <h1 className=" db-s f2-00 mv0-00 ">
                    GLOBABUILD
                </h1>
            </figcaption> 
        </figure>
    )
}

export default Logo
