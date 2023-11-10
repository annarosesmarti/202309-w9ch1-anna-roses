import { Store } from "@reduxjs/toolkit";
import { store } from "../store";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";

const customRender = (childern: React.ReactElement, mockStore: Store = store) =>
  render(
    <BrowserRouter>
      <Provider store={mockStore}>
        <ThemeProvider theme={mainTheme}>{childern}</ThemeProvider>
      </Provider>
    </BrowserRouter>,
  );

export default customRender;
