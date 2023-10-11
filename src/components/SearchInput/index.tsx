import { Container, InputSearch } from "./styles";

const SearchInput = ({
  onChange,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container>
      <InputSearch placeholder="Pesquise um livro" onChange={onChange} />
    </Container>
  );
};

export default SearchInput;
