
import { getData } from "../API/Api";
import { useQuery } from "@tanstack/react-query";

export const FetchRQ = () =>{

    

    const {data} = useQuery({
        queryKey:['post'],
        queryFn:getData,
    })

    return(
        <>
            <ul>
             {  data?.map((currElem) =>{  
                const {id, title, body} = currElem; 
              return(  
                <li key={id}>
                    <p>{title}</p>
                    <p>{body}</p>
                </li>
            )
            })
            }
            </ul>
        
        </>
    )
}