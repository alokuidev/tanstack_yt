import { useEffect, useState } from "react"
import { fetchData } from "../API/Api";

export const FetchOld = () =>{
    const [posts, setPosts] = useState([]);

    const getData = async() =>{
        try {
            const res = await fetchData();
            //console.log(res)
            if (res.status === 200) {
                setPosts(res.data);
            } else {
                console.log("Failed to fetch posts");
            }
        } catch (error) {
             console.log(error);
             return [];   
        }
    }
    useEffect(() =>{
        getData();
    },[])
    return(
        <>
            <ul>
             {  posts?.map((currElem) =>{  
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