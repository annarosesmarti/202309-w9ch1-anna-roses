import styled from "styled-components";

const NavMenuStyled = styled.nav`
  background-color: ${({ theme }) => theme.color.mainBackground};
  color: ${({ theme }) => theme.color.mainFontColor};
  margin: 15px 0;

  .nav-menu {
    &__container {
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }

    &__link {
      padding: 8px 15px;
      font-size: ${({ theme }) => theme.typography.cardTextSize};
      border-radius: 5px;
      margin-top: 15px;
      background-color: ${({ theme }) => theme.color.containerBackground};
      color: ${({ theme }) => theme.color.titleFontColor};
    }
  }

  .active {
    color: grey;
  }
`;

export default NavMenuStyled;
