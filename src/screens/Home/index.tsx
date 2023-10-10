import { useMemo, useState } from "react";
import SearchInput from "../../components/searchInput";
import { useSearchBook } from "../../services/books";
import { BookImage, Container } from "./styles";
import BooksList from "../../components/booksList";
import { BooksResponse } from "../../services/books/types";

const Home = () => {
  const [term, setTerm] = useState("");

  const {
    data,
    isLoading,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchBook(term, { enabled: !!term });

  // if (data) {
  //   console.log(data);
  //   const newData = data?.pages[0];
  //   console.log(newData);
  // }

  return (
    <Container>
      <SearchInput onChange={(e) => setTerm(e.target.value)} />
      {data?.pages[0].items ? (
        <BooksList items={data?.pages[0].items} />
      ) : (
        <BookImage />
      )}
    </Container>
  );
};

export default Home;
