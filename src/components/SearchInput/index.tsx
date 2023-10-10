import { Container, InputSearch } from "./styles";

const SearchInput = ({
  onChange,
  ...otherProps
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Container>
      <InputSearch
        placeholder="Pesquise um livro"
        onChange={onChange}
        {...otherProps}
      />
    </Container>
  );
};

export default SearchInput;
