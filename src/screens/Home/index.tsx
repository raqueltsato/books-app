import SearchInput from "../../components/SearchInput";
import { BookImage, Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <SearchInput />
      <BookImage />
    </Container>
  );
};

export default Home;
