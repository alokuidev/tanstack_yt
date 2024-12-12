import { useQuery } from "@tanstack/react-query";
import { getPost } from "../API/Api";
import { NavLink, useParams } from "react-router-dom";

const FetchRQInd = () =>{
    const {id} = useParams()
    
    const {data, isLoading , isError } = useQuery({
        queryKey:['post', id],
        queryFn: () => getPost(id),
    })

    if(isLoading) return <h1>Loading</h1>
    if(isError) return <h1>Got Error</h1>
    return(
        <>
        <ul>
            <li>
                <p>{data.id}</p>
                <p>{data.title}</p>
                <p>{data.body}</p>
            </li>
            <NavLink to='/rq'>
            <button>Go Back</button>
            </NavLink>
            </ul> 
        </>
    )
}

export default FetchRQInd;