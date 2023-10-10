import { BookItemResponse } from "../../services/books/types";
import { CardContainer, SubTitle, Title } from "./styles";

const BookCard = ({
  volumeInfo,
}: {
  volumeInfo: BookItemResponse["volumeInfo"];
}): JSX.Element => {
  const { title, publishedDate, imageLinks } = volumeInfo;
  return (
    <CardContainer>
      {imageLinks?.smallThumbnail && <img src={imageLinks.smallThumbnail} />}
      <Title>{title}</Title>
      <SubTitle>{publishedDate}</SubTitle>
    </CardContainer>
  );
};

export default BookCard;
