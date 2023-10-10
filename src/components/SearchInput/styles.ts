import { styled } from "styled-components";

export const Container = styled.div`
  margin: 30px;
  width: 80%;
`;

export const InputSearch = styled.input`
  background-color: #f1f7fc;
  border: 1px solid #c3bef0;
  outline: #cca8e9;
  line-height: 300%;
  font-size: 1rem;

  color: #b0578d;
  border-radius: 2rem;
  padding: 0 1rem;

  width: -webkit-fill-available;

  &:placeholder {
    color: #406a76;
  }
`;
