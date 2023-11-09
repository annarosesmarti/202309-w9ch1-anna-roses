import styled from "styled-components";

const FilmCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: ${({ theme }) => theme.color.mainBackground};
  padding: 30px;
  width: 100%;

  .film__title {
    font-size: ${({ theme }) => theme.typography.cardTitleSize};
    font-weight: 700;
    text-align: center;

    &__year {
      font-size: ${({ theme }) => theme.typography.cardTextSize};
    }
  }

  .film__image {
    object-fit: contain;
    width: 100%;
    height: auto;
  }
`;

export default FilmCardStyled;
