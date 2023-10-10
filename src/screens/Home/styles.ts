import { styled } from "styled-components";
import { ReactComponent as Book } from "../../assets/book.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookImage = styled(Book)`
  margin-top: 60px;
`;
