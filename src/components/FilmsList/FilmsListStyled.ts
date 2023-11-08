import styled from "styled-components";

const FilmsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;

  .film-container {
    width: 100%;
    object-fit: contain;
    aspect-ratio: auto;
  }

  @media (min-width: 440px) {
    .film-container {
      width: 400px;
    }
  }
`;

export default FilmsListStyled;
