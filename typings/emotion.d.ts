import "@emotion/react";

type Color = "black" | "pink" | "blue" | "green" | "yellow" | "gray";

type Shade =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200
  | 1300
  | 1400
  | 1500
  | 1600
  | 1700
  | 1800
  | 1900
  | 2000
  | 2100
  | 2200
  | 2300
  | 2400;

export type ColorShade = keyof ({
  white: string;
} & {
  [C in `${Color}.${Shade}`]: string;
});

declare module "@emotion/react" {
  export interface Theme {
    bgColor: ColorShade;
    fgColor: ColorShade;
    fonts: {
      monoFontFamily: string;
      fontFamily: string;
    };
    colors: { [key in ColorShade]: string };
  }
}
