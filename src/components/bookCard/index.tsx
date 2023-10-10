import { BookItemResponse } from "../../services/books/types";
import { CardContainer, SubTitle, Title } from "./styles";

const BookCard = ({
  volumeInfo,
}: {
  volumeInfo: BookItemResponse["volumeInfo"];
}): JSX.Element => {
  const {
    title,
    publishedDate,
    imageLinks: { thumbnail },
  } = volumeInfo;
  return (
    <CardContainer>
      <img src={thumbnail} />
      <Title>{title}</Title>
      <SubTitle>{publishedDate}</SubTitle>
    </CardContainer>
  );
};

export default BookCard;
