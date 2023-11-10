import styled from "styled-components";

const FilmFormStyled = styled.form`
  background-color: ${({ theme }) => theme.color.mainBackground};
  padding: 30px;
  width: 100%;

  .form {
    &__label,
    &__input {
      display: inline-block;
    }

    &__label {
      margin-top: 10px;
      margin-bottom: 5px;
    }

    &__input {
      padding: 5px;
    }

    &__container {
      display: flex;
      flex-direction: column;
    }

    &__watched {
      display: flex;
      flex-direction: row;
    }
  }
`;

export default FilmFormStyled;
