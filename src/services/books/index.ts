import { UseQueryOptions, useQuery } from "react-query";
import { createUseTermKey } from "./keys";
import { BooksResponse } from "./types";

const fetchData = async (term: string) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${term}&startIndex=0&maxResults=10`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const useSearchBook = (
  term: string,
  options?: UseQueryOptions<BooksResponse>
) => {
  return useQuery(createUseTermKey(), () => fetchData(term), options);
};
