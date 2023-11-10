import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import NavMenu from "./NavMenu";

describe("Given a NavMenu component", () => {
  describe("When it is rendered", () => {
    test("Then it should show Home", () => {
      const expectedAriaLabelText = "Home";

      customRender(<NavMenu />);

      const ariaLabelText = screen.getByLabelText(expectedAriaLabelText);

      expect(ariaLabelText).toBeInTheDocument();
    });
  });
});
