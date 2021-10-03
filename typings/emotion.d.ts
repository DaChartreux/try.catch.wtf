import "@emotion/react";

type Color = "pink" | "blue" | "green" | "yellow" | "gray";

type Shade = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorShade = keyof ({
  white: string;
  black: string;
} & {
  [C in `${Color}.${Shade}`]: string;
});

declare module "@emotion/react" {
  export interface Theme {
    borderRadius: string;

    fonts: {
      monoFontFamily: string;
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
