import styled from "styled-components";

const AddFormPageStyled = styled.main`
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;

    &__title {
      font-size: ${({ theme }) => theme.typography.titleSize};
      padding-bottom: 15px;
      color: ${({ theme }) => theme.color.titleFontColor};
    }
  }
`;

export default AddFormPageStyled;
