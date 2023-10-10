import { useEffect, useMemo, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import SearchInput from "../../components/searchInput";
import { useSearchBook } from "../../services/books";
import { BookImage, Button, Container } from "./styles";
import BooksList from "../../components/booksList";
import lottie from "../../assets/lottie.json";
import useDebounce from "../../hooks";

const Home = () => {
  const [term, setTerm] = useState("");
  const debouncedSearchQuery = useDebounce(term, 600);

  const {
    data,
    isLoading,
    fetchNextPage,
    refetch,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchBook(debouncedSearchQuery, {
    enabled: !!debouncedSearchQuery,
  });

  const newData = useMemo(
    () =>
      data?.pages.reduce((acc, current) => [...acc, ...current.items], []) ||
      [],
    [data?.pages]
  );

  useEffect(() => {
    !!debouncedSearchQuery && refetch();
  }, [debouncedSearchQuery, refetch]);

  const renderBody = useMemo(() => {
    if (isLoading) {
      return (
        <Player
          autoplay
          loop
          src={lottie}
          style={{ height: "300px", width: "300px" }}
        />
      );
    }
    if (newData.length) {
      return <BooksList items={newData} />;
    } else {
      return <BookImage />;
    }
  }, [newData, isLoading]);

  return (
    <Container>
      <SearchInput onChange={(e) => setTerm(e.target.value)} />
      {renderBody}
      {!!newData.length && <Button onClick={fetchNextPage}>Clique aqui</Button>}
    </Container>
  );
};

export default Home;
