// import { useLoaderData, useParams } from 'react-router-dom'
import DetailPagesLayout from '../../../layouts/DetailPagesLayout'
// import mtnlogo from '../../../images/mtnlogo.png'
import Poster  from '../governance/Poster';

export default function GovernanceDetails() {
    
    return (
    // <DetailPagesLayout depname = "Governance"/>
    <Poster />
    
  )
}

// Govenance Details Loader Function

// export const careerDetailsLoader = async ({ params }) => {
//     const { id } = params
//     const res = await fetch('http://localhost:4000/careers/' + id)

//     if (!res.ok) {
//         throw Error ('Could not find that career with the specified id.')
//     } 

//     return res.json()
// }