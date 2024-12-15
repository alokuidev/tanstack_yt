/* eslint-disable react-hooks/exhaustive-deps */
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../API/Api";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const InfiniteScrollNpm = () => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 10 ? allPages.length + 1 : undefined;
    },
  });

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isLoading) return <p className="status">Loading...</p>;

  return (
    <>
      <div>
        <h1>Infinite Query With React Query V5</h1>
        {data?.pages?.map((page, index) => (
          <ul key={index}>
            {page.map((user) => (
              <li
                key={user.id}
                style={{ padding: "10px", border: "1px solid #ccc" }}
              >
                <p>{user.login}</p>
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  width={50}
                  height={50}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div ref={ref}>Loading More...</div>
    </>
  );
};
