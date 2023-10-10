import { styled } from "styled-components";
import { ReactComponent as Book } from "../../assets/book.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookImage = styled(Book)`
  margin-top: 60px;
  transform: scale(0.7);
`;

export const Button = styled.button`
  margin: 12px;
  background-color: #c3bef0;
  border-radius: 8px;

  &:hover {
    background-color: #cca8e9;
  }
`;
