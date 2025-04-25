import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {

    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname
        .split('/')
        .filter(crumb => crumb !=='')
        .map(crumb => {

            currentLink += `/${crumb}`;

            return(
                <div className="ttu mr1-00"
                    key={crumb}
                >
                    <Link to = {currentLink}
                        className="white-90"
                    >
                        {crumb}
                    </Link>
                </div>
            );
        }
    );

    return (
        <div id=""
            className="flex vh-5 items-center ph1-00 bg-blue2"
        >
           { crumbs}
        </div>
    )
}
