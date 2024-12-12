
import { NavLink } from "react-router-dom";
import { getData } from "../API/Api";
import { useQuery } from "@tanstack/react-query";

export const FetchRQ = () =>{

    

    const {data, isLoading , isError , error} = useQuery({
        queryKey:['post'],
        queryFn:getData,
        //staleTime:500000,
        refetchInterval:1000,
        refetchIntervalInBackground:true,
    })
    if(isLoading) return <p className="status">Loading...</p>
    if(isError) return <p className="status"> Error: {error.message || 'Something Went Wrong !!!'}</p>
    return(
        <>
            <ul>
             {  data?.map((currElem) =>{  
                const {id, title, body} = currElem; 
              return(  
                <li key={id}>
                    <NavLink to={`/rq/${id}`}>
                        <p>{title}</p>
                        <p>{body}</p>
                    </NavLink>
                </li>
            )
            })
            }
            </ul>
        
        </>
    )
}