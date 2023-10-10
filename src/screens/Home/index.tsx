import { useState } from "react";
import SearchInput from "../../components/searchInput";
import { useSearchBook } from "../../services/books";
import { BookImage, Container } from "./styles";
import BooksList from "../../components/booksList";

const Home = () => {
  const [term, setTerm] = useState("");

  const { data: books } = useSearchBook(term, { enabled: !!term });

  return (
    <Container>
      <SearchInput onChange={(e) => setTerm(e.target.value)} />
      {books?.items ? <BooksList items={books.items} /> : <BookImage />}
    </Container>
  );
};

export default Home;
