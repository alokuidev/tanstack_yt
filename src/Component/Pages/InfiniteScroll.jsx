/* eslint-disable react-hooks/exhaustive-deps */
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../API/Api";
import { useEffect } from "react";
export const InfiniteScroll = () => {

  const { data, isLoading, hasNextPage,fetchNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      // console.log("lallPages)
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  const handleScroll = () =>{
    const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1;

    if(bottom && hasNextPage){
        fetchNextPage()
    }
  }

  useEffect(() =>{
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[hasNextPage])

  if (isLoading) return <p className="status">Loading...</p>;
  return (
    <div>
      <h1>Infinite Query With React Query V5</h1>
      {data?.pages?.map((page, index) => {
        return (
          <ul key={index}>
            {page.map((user) => {
              return (
                <li
                  key={user.id}
                  style={{ padding: "10px", border: "1px solid #ccc" }}
                >
                  <p>{user.login}</p>
                  <img
                    src={user.avatar_url}
                    alt="user.login"
                    width={50}
                    height={50}
                  />
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};
