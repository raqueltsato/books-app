import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
} from "react-query";
import { createUseTermKey } from "./keys";
import { BooksResponse } from "./types";

const fetchData = async (term: string, pageParam) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=${pageParam}&maxResults=10`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const useSearchBook = (
  term: string,
  options?: UseInfiniteQueryOptions<BooksResponse>
) => {
  return useInfiniteQuery(
    createUseTermKey(),
    ({ pageParam = 0 }) => fetchData(term, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.items.length ? allPages.length + 1 : undefined;
      },
      ...options,
    }
  );
};
