import { css, Global } from "@emotion/react";

import FONT_FAMILIES from "@styles/fontFamilies";

const GlobalTheme = () => (
  <Global
    styles={(theme) => css`
      ${FONT_FAMILIES}

      html,
      body {
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        font-family: ${theme.fonts.fontFamily};
      }

      code {
        font-family: ${theme.fonts.monoFontFamily};
      }

      * {
        border: 0;
        box-sizing: border-box;
      }

      html {
        background: ${theme.colors[theme.bgColor]};
        color: ${theme.colors[theme.fgColor]};
        transition: background-color 200ms ease-in-out;
      }

      ::-webkit-scrollbar {
        width: 0.5rem;
        background-color: #27272a;
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background-color: #ff006a;
        border: 2px solid #27272a;
      }
    `}
  />
);

export default GlobalTheme;
