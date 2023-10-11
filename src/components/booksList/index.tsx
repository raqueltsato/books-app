import { ListContainer } from "./styles";
import { BooksResponse } from "../../services/books/types";
import BookCard from "../bookCard";

const BooksList = ({ items }: { items: BooksResponse["items"] }) => {
  return (
    <>
      <ListContainer>
        {items?.map(({ id, volumeInfo }) => (
          <BookCard key={id} volumeInfo={volumeInfo} />
        ))}
      </ListContainer>
    </>
  );
};

export default BooksList;
