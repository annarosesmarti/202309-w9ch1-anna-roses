import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      mainBackground: string;
      containerBackground: string;
      mainFontColor: string;
      titleFontColor: string;
    };
    typography: {
      mainFontFamily: string;
      titleSize: string;
      subtitleSize: string;
      cardTitleSize: string;
      cardTextSize: string;
    };
  }
}
