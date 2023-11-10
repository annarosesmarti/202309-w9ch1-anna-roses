import styled from "styled-components";

const ButtonStyled = styled.div`
  .button {
    padding: 8px 15px;
    font-size: ${({ theme }) => theme.typography.cardTextSize};
    border-radius: 5px;
    margin-top: 15px;

    &__black {
      background-color: ${({ theme }) => theme.color.containerBackground};
      color: ${({ theme }) => theme.color.titleFontColor};
    }

    &__yellow {
      background-color: ${({ theme }) => theme.color.mainBackground};
      color: ${({ theme }) => theme.color.mainFontColor};
    }
  }

  .active {
    color: grey;
  }
`;

export default ButtonStyled;
