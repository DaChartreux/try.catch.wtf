import { css, Global } from "@emotion/react";

import THEME from "@styles/theme";
import FONT_FAMILIES from "@styles/fontFamilies";

const GlobalTheme = () => (
  <Global
    styles={css`
      ${FONT_FAMILIES}

      :root {
        --color-bg: 0, 0%, 100%;
        --color-fg: 210, 50%, 9%;

        --color-primary-100: 40, 95%, 67%;
        --color-primary-200: 40, 95%, 57%;
        --color-primary-300: 40, 95%, 47%;

        --color-info-bg: 210, 55%, 92%;
        --color-info-fg: 245, 100%, 60%;

        --color-fgAlpha-50: 210, 50%, 9%, 0.04;
        --color-fgAlpha-100: 210, 50%, 9%, 0.06;
        --color-fgAlpha-200: 210, 50%, 9%, 0.08;
        --color-fgAlpha-300: 210, 50%, 9%, 0.16;
        --color-fgAlpha-400: 210, 50%, 9%, 0.24;
        --color-fgAlpha-500: 210, 50%, 9%, 0.36;
        --color-fgAlpha-600: 210, 50%, 9%, 0.48;
        --color-fgAlpha-700: 210, 50%, 9%, 0.64;
        --color-fgAlpha-800: 210, 50%, 9%, 0.8;
        --color-fgAlpha-900: 210, 50%, 9%, 0.92;

        /*
        --color-primary-100: hsl(40, 95%, 67%);
        --color-primary-200: hsl(40, 95%, 57%);
        --color-primary-300: hsl(40, 95%, 47%);

        --color-rose-100: hsl(350, 89%, 60%);
        --color-rose-200: hsl(350, 89%, 50%);
        --color-rose-300: hsl(350, 89%, 40%);

        --color-pink-100: hsl(330, 81%, 60%);
        --color-pink-200: hsl(330, 81%, 50%);
        --color-pink-300: hsl(330, 81%, 40%);

        --color-fuchsia-100: hsl(292, 84%, 61%);
        --color-fuchsia-200: hsl(292, 84%, 51%);
        --color-fuchsia-300: hsl(292, 84%, 41%);

        --color-rose-100: hsl(330, 81%, 60%);
        --color-rose-200: hsl(330, 81%, 50%);
        --color-rose-300: hsl(330, 81%, 40%);

        --color-rose-100: hsl(330, 81%, 60%);
        --color-rose-200: hsl(330, 81%, 50%);
        --color-rose-300: hsl(330, 81%, 40%);

        --color-rose-100: hsl(330, 81%, 60%);
        --color-rose-200: hsl(330, 81%, 50%);
        --color-rose-300: hsl(330, 81%, 40%);

        --color-rose-100: hsl(330, 81%, 60%);
        --color-rose-200: hsl(330, 81%, 50%);
        --color-rose-300: hsl(330, 81%, 40%);

        --color-rose-100: hsl(330, 81%, 60%);
        --color-rose-200: hsl(330, 81%, 50%);
        --color-rose-300: hsl(330, 81%, 40%);

        
        */
      }

      :root[data-theme="dark"] {
        --color-bg: 210, 50%, 9%;
        --color-fg: 0, 0%, 100%;

        --color-primary-100: 40, 95%, 77%;
        --color-primary-200: 40, 95%, 67%;
        --color-primary-300: 40, 95%, 57%;

        --color-info-bg: 210, 38%, 15%;
        --color-info-fg: 230, 100%, 67%;

        --color-fgAlpha-50: 0, 0%, 100%, 0.04;
        --color-fgAlpha-100: 0, 0%, 100%, 0.06;
        --color-fgAlpha-200: 0, 0%, 100%, 0.08;
        --color-fgAlpha-300: 0, 0%, 100%, 0.16;
        --color-fgAlpha-400: 0, 0%, 100%, 0.24;
        --color-fgAlpha-500: 0, 0%, 100%, 0.36;
        --color-fgAlpha-600: 0, 0%, 100%, 0.48;
        --color-fgAlpha-700: 0, 0%, 100%, 0.64;
        --color-fgAlpha-800: 0, 0%, 100%, 0.8;
        --color-fgAlpha-900: 0, 0%, 100%, 0.92;

        /*
        --color-bg: hsl(210, 50%, 9%);
        --color-fg: hsl(0, 0%, 100%);

        --color-primary-100: hsl(40, 95%, 77%);
        --color-primary-200: hsl(40, 95%, 67%);
        --color-primary-300: hsl(40, 95%, 57%);

        --color-blue-100: hsl(204, 57%, 56%);
        --color-blue-200: hsl(204, 57%, 46%);
        --color-blue-300: hsl(204, 57%, 36%);

        --color-fgAlpha-50: hsla(0, 0%, 100%, 0.04);
        --color-fgAlpha-100: hsla(0, 0%, 100%, 0.06);
        --color-fgAlpha-200: hsla(0, 0%, 100%, 0.08);
        --color-fgAlpha-300: hsla(0, 0%, 100%, 0.16);
        --color-fgAlpha-400: hsla(0, 0%, 100%, 0.24);
        --color-fgAlpha-500: hsla(0, 0%, 100%, 0.36);
        --color-fgAlpha-600: hsla(0, 0%, 100%, 0.48);
        --color-fgAlpha-700: hsla(0, 0%, 100%, 0.64);
        --color-fgAlpha-800: hsla(0, 0%, 100%, 0.8);
        --color-fgAlpha-900: hsla(0, 0%, 100%, 0.92);
         */
      }

      html,
      body {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        font-family: ${THEME.fonts.fontFamily};
      }

      code {
        font-family: ${THEME.fonts.monoFontFamily};
      }

      * {
        border: 0;
        box-sizing: border-box;
      }

      html {
        background: hsl(${THEME.colors["bg"]});
        color: hsl(${THEME.colors["fg"]});
        transition: background-color 200ms ease-in-out;
      }

      ::-webkit-scrollbar {
        width: 0.5rem;
        background-color: hsla(${THEME.colors["bg"]}, 1);
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background-color: hsla(${THEME.colors["fg"]}, 0.2);
        border: 2px solid hsla(${THEME.colors["bg"]}, 1);
      }
    `}
  />
);

export default GlobalTheme;
