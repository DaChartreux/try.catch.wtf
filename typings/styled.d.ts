import "styled-components";

type Color = "pink" | "blue" | "green" | "yellow" | "gray";

type Shade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorShade = keyof ({
  white: string;
  black: string;
} & {
  [C in `${Color}.${Shade}`]: string;
});

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    fonts: {
      fontFamily: string;
      normalWeight: number;
      boldWeight: number;
    };

    colors: {
      white: string;
      black: string;
    } & {
      [C in `${Color}.${Shade}`]: string;
    };
  }
}

type color = "red" | "green" | "blue";
