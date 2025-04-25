import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    
    const { id } = useParams()
    const career = useLoaderData()
    
    return (
    <div>
        <header>
           Career Details for: <h2>{career.title}</h2>
        </header>
        <div id=""
            className=""
        >
            <p>
                ID: { career.id}
            </p>
            <p>
                <b> Starting Salary:</b> { career.salary}
            </p>
            <p>
                <b>Location:</b> { career.location}
            </p>
        </div>
    </div>
  )
}

// Career Details Loader Function

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch('http://localhost:4000/careers/' + id)

    if (!res.ok) {
        throw Error ('Could not find that career with the specified id.')
    } 

    return res.json()
}