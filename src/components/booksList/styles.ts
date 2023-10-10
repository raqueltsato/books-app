import styled from "styled-components";

export const ListContainer = styled.ul`
  border: 1px solid #dee1e6;
  border-radius: 8px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
