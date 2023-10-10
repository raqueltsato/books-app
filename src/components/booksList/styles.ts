import styled from "styled-components";

export const ListContainer = styled.ul`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
