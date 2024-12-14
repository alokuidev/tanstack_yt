import { NavLink } from "react-router-dom";
import { deletePost, getData } from "../API/Api";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export const FetchRQ = () => {
  const [pagenum, setPageNum] = useState(1);

  const QueryClient = useQueryClient();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", pagenum],
    queryFn: () => getData(pagenum),
    placeholderData:keepPreviousData,
    //staleTime:500000,
    // refetchInterval:1000,
    // refetchIntervalInBackground:true,
  });
  const deleteMutation = useMutation({
    mutationFn:(id) => deletePost(id),
    onSuccess:(data,id) =>{
      QueryClient.setQueryData(["post", pagenum],(currElem) =>{
        return currElem?.filter((post) => post.id != id)
      })
    }
  })
  if (isLoading) return <p className="status">Loading...</p>;
  if (isError)
    return (
      <p className="status">
        {" "}
        Error: {error.message || "Something Went Wrong !!!"}
      </p>
    );
  return (
    <>
      <ul>
        {data?.map((currElem) => {
          const { id, title, body } = currElem;
          return (
            <li key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
              <button onClick={() => deleteMutation.mutate(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <div className="buttonContainer">
        <button
          onClick={() => {
            setPageNum(pagenum - 1);
          }}
          disabled={pagenum === 1}
        >
          Prev
        </button>
        <p>{pagenum}</p>
        <button
          onClick={() => {
            setPageNum(pagenum + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};
