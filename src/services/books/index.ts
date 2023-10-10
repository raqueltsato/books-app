import { UseInfiniteQueryOptions, useInfiniteQuery } from "react-query";
import { createUseTermKey } from "./keys";
import { BooksResponse } from "./types";

const MAX_RESULT = 10;
const BASE_URL = "https://www.googleapis.com/books/v1";

const fetchData = async (term: string, pageParam) => {
  try {
    const response = await fetch(
      `${BASE_URL}/volumes?q=${term}&startIndex=${pageParam}&maxResults=${MAX_RESULT}`
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
        return lastPage.items?.length
          ? allPages.length * MAX_RESULT + 1
          : undefined;
      },
      ...options,
    }
  );
};
