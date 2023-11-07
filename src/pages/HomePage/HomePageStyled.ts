import styled from "styled-components";

const HomePageStyled = styled.main`
  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }

  .title {
    font-size: ${({ theme }) => theme.typography.titleSize};
    padding-bottom: 15px;
    color: ${({ theme }) => theme.color.titleFontColor};

    &__text {
      font-size: ${({ theme }) => theme.typography.subtitleSize};
      color: ${({ theme }) => theme.color.titleFontColor};
    }
  }
`;

export default HomePageStyled;
