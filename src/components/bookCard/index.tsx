import { BookItemResponse } from "../../services/books/types";
import { CardContainer, SubTitle, Title } from "./styles";
import Thumbnail from "../../assets/Thumbnail.png";

const BookCard = ({
  volumeInfo,
}: {
  volumeInfo: BookItemResponse["volumeInfo"];
}): JSX.Element => {
  const { title, publishedDate, imageLinks } = volumeInfo;
  return (
    <CardContainer>
      <img src={imageLinks?.smallThumbnail || Thumbnail} />
      <Title>{title}</Title>
      <SubTitle>{publishedDate}</SubTitle>
    </CardContainer>
  );
};

export default BookCard;
