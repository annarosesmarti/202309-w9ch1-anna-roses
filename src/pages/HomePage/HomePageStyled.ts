import styled from "styled-components";

const HomePageStyled = styled.main`
  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }

  .title {
    font-size: 2rem;
    padding-bottom: 15px;
    color: ${({ theme }) => theme.color.titleFontColor};

    &__text {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color.titleFontColor};
    }
  }
`;

export default HomePageStyled;
