import { Link, useRouteError } from "react-router-dom"

export default function CareersError() {

    const error = useRouteError()

    return (
    <article id=""
        className=" flex flex-column justify-between 
        container container90
        vh-50 pt4-00"
    >
        <header>
            <h2>
                Careers Loader Error
            </h2>
        </header>
        <main>
            <p>
                { error.message }
            </p>
        </main>
        <footer>
            <div>
            <Link to = "/">
                Back to the Homepage
            </Link>
            </div>
            <div>
            <Link to = "/careers">
                Back to the Careers
            </Link>
            </div>
        </footer>
    </article>
)
}
