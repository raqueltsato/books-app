import { InputSearch } from "./styles";

const SearchInput = ({
  onChange,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <InputSearch placeholder="Pesquise um livro" onChange={onChange} />;
};

export default SearchInput;
