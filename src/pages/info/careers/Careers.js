import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
    
    const careers = useLoaderData()
  
    return (
        <div id="careers" className="mv4-00 w-100 flex justify-between ggap1-00"
        >
            {careers.map(career => (
                <Link to={career.id.toString()}
                    key={career.id}
                >
                    <article className="h-100 ba pa1-00 bg-blue3">
                        <p >
                            {career.title}
                        </p> 
                        <span className="dib mb2-00">
                            Based in:{career.location}
                        </span>
                    </article>
                </Link>)
                )
            }
        </div>
    )
}

// Career Details Loader Function

export const careersLoader = async ({ params }) => {

    const res = await fetch('http://localhost:4000/careers/')

    if (!res.ok) {
        throw Error ('Could not fetch the careers.')
    } 

    return res.json()
}
 