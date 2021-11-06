import React from "react";
import { css, Global } from "@emotion/react";

import THEME from "@styles/theme";
import FONT_FAMILIES from "@styles/fontFamilies";

const GlobalTheme = () => (
  <Global
    styles={css`
      ${FONT_FAMILIES}

      :root {
        --color-bg-100: 0, 0%, 100%; // hsl(0, 0%, 100%)
        --color-bg-200: 225, 0%, 99%; // hsl(225, 0%, 99%)

        --color-fg-100: 210, 50%, 9%; // hsl(210, 50%, 9%)
        --color-fg-200: 0, 0%, 0%; // hsl(0, 0%, 0%)

        --color-primary-100: 40, 95%, 47%; // hsl(40, 95%, 67%)
        --color-primary-200: 40, 95%, 42%; // hsl(40, 95%, 57%)
        --color-primary-300: 40, 95%, 38%; // hsl(40, 95%, 47%)

        --color-info-bg: 210, 55%, 92%; // hsl(210, 55%, 92%)
        --color-info-fg: 245, 100%, 60%; // hsl(245, 100%, 60%)

        --color-red-100: 0, 91%, 71%; //  hsl(0, 91%, 71%)
        --color-red-200: 0, 91%, 66%; //  hsl(0, 91%, 66%)
        --color-red-300: 0, 91%, 61%; //  hsl(0, 91%, 61%)

        --color-orange-100: 27, 96%, 61%; //  hsl(27, 96%, 61%)
        --color-orange-200: 27, 96%, 56%; //  hsl(27, 96%, 56%)
        --color-orange-300: 27, 96%, 51%; //  hsl(27, 96%, 51%)

        --color-amber-100: 43, 96%, 56%; //  hsl(43, 96%, 56%)
        --color-amber-200: 43, 96%, 51%; //  hsl(43, 96%, 51%)
        --color-amber-300: 43, 96%, 46%; //  hsl(43, 96%, 46%)

        --color-yellow-100: 48, 96%, 53%; //  hsl(48, 96%, 53%)
        --color-yellow-200: 48, 96%, 48%; //  hsl(48, 96%, 48%)
        --color-yellow-300: 48, 96%, 43%; //  hsl(48, 96%, 43%)

        --color-lime-100: 83, 78%, 55%; //  hsl(83, 78%, 55%)
        --color-lime-200: 83, 78%, 50%; //  hsl(83, 78%, 50%)
        --color-lime-300: 83, 78%, 45%; //  hsl(83, 78%, 45%)

        --color-green-100: 142, 69%, 58%; //  hsl(142, 69%, 58%)
        --color-green-200: 142, 69%, 53%; //  hsl(142, 69%, 53%)
        --color-green-300: 142, 69%, 48%; //  hsl(142, 69%, 48%)

        --color-emerald-100: 158, 64%, 52%; //  hsl(158, 64%, 52%)
        --color-emerald-200: 158, 64%, 47%; //  hsl(158, 64%, 47%)
        --color-emerald-300: 158, 64%, 42%; //  hsl(158, 64%, 42%)

        --color-teal-100: 172, 66%, 50%; //  hsl(172, 66%, 50%)
        --color-teal-200: 172, 66%, 45%; //  hsl(172, 66%, 45%)
        --color-teal-300: 172, 66%, 40%; //  hsl(172, 66%, 40%)

        --color-cyan-100: 188, 86%, 53%; //  hsl(188, 86%, 53%)
        --color-cyan-200: 188, 86%, 48%; //  hsl(188, 86%, 48%)
        --color-cyan-300: 188, 86%, 43%; //  hsl(188, 86%, 43%)

        --color-sky-100: 198, 93%, 60%; //  hsl(198, 93%, 60%)
        --color-sky-200: 198, 93%, 55%; //  hsl(198, 93%, 55%)
        --color-sky-300: 198, 93%, 50%; //  hsl(198, 93%, 50%)

        --color-blue-100: 213, 94%, 68%; //  hsl(213, 94%, 68%)
        --color-blue-200: 213, 94%, 63%; //  hsl(213, 94%, 63%)
        --color-blue-300: 213, 94%, 58%; //  hsl(213, 94%, 58%)

        --color-indigo-100: 234, 89%, 74%; //  hsl(234, 89%, 74%)
        --color-indigo-200: 234, 89%, 69%; //  hsl(234, 89%, 69%)
        --color-indigo-300: 234, 89%, 64%; //  hsl(234, 89%, 64%)

        --color-violet-100: 255, 92%, 76%; //  hsl(255, 92%, 76%)
        --color-violet-200: 255, 92%, 71%; //  hsl(255, 92%, 71%)
        --color-violet-300: 255, 92%, 66%; //  hsl(255, 92%, 66%)

        --color-purple-100: 270, 95%, 75%; //  hsl(270, 95%, 75%)
        --color-purple-200: 270, 95%, 70%; //  hsl(270, 95%, 70%)
        --color-purple-300: 270, 95%, 65%; //  hsl(270, 95%, 65%)

        --color-fuchsia-100: 292, 91%, 73%; //  hsl(292, 91%, 73%)
        --color-fuchsia-200: 292, 91%, 68%; //  hsl(292, 91%, 68%)
        --color-fuchsia-300: 292, 91%, 63%; //  hsl(292, 91%, 63%)

        --color-pink-100: 329, 86%, 70%; //  hsl(329, 86%, 70%)
        --color-pink-200: 329, 86%, 65%; //  hsl(329, 86%, 65%)
        --color-pink-300: 329, 86%, 60%; //  hsl(329, 86%, 60%)

        --color-rose-100: 351, 95%, 71%; //  hsl(351, 95%, 71%)
        --color-rose-200: 351, 95%, 66%; //  hsl(351, 95%, 66%)
        --color-rose-300: 351, 95%, 61%; //  hsl(351, 95%, 61%)

        .light-image-section {
          display: block;
        }

        .dark-image-section {
          display: none;
        }
      }

      :root[data-theme="dark"] {
        --color-bg-100: 210, 50%, 9%; // hsl(210, 50%, 9%)
        --color-bg-200: 0, 0%, 0%; // hsl(0, 0%, 0%)

        --color-fg-100: 225, 25%, 95%; // hsl(225, 25%, 95%)
        --color-fg-200: 0, 0%, 100%; // hsl(0, 0%, 100%)

        --color-primary-100: 40, 95%, 77%; // hsl(40, 95%, 77%)
        --color-primary-200: 40, 95%, 67%; // hsl(40, 95%, 67%)
        --color-primary-300: 40, 95%, 57%; // hsl(40, 95%, 57%)

        --color-info-bg: 210, 38%, 15%; // hsl(210, 38%, 15%)
        --color-info-fg: 230, 100%, 67%; // hsl(230, 100%, 67%)

        --color-red-100: 0, 91%, 81%; // hsl(0, 91%, 81%)
        --color-red-200: 0, 91%, 76%; // hsl(0, 91%, 76%)
        --color-red-300: 0, 91%, 71%; // hsl(0, 91%, 71%)

        --color-orange-100: 27, 96%, 71%; // hsl(27, 96%, 71%)
        --color-orange-200: 27, 96%, 66%; // hsl(27, 96%, 66%)
        --color-orange-300: 27, 96%, 61%; // hsl(27, 96%, 61%)

        --color-amber-100: 43, 96%, 66%; // hsl(43, 96%, 66%)
        --color-amber-200: 43, 96%, 61%; // hsl(43, 96%, 61%)
        --color-amber-300: 43, 96%, 56%; // hsl(43, 96%, 56%)

        --color-yellow-100: 48, 96%, 63%; // hsl(48, 96%, 63%)
        --color-yellow-200: 48, 96%, 58%; // hsl(48, 96%, 58%)
        --color-yellow-300: 48, 96%, 53%; // hsl(48, 96%, 53%)

        --color-lime-100: 83, 78%, 65%; // hsl(83, 78%, 65%)
        --color-lime-200: 83, 78%, 60%; // hsl(83, 78%, 60%)
        --color-lime-300: 83, 78%, 55%; // hsl(83, 78%, 55%)

        --color-green-100: 142, 69%, 68%; // hsl(142, 69%, 68%)
        --color-green-200: 142, 69%, 63%; // hsl(142, 69%, 63%)
        --color-green-300: 142, 69%, 58%; // hsl(142, 69%, 58%)

        --color-emerald-100: 158, 64%, 62%; // hsl(158, 64%, 62%)
        --color-emerald-200: 158, 64%, 57%; // hsl(158, 64%, 57%)
        --color-emerald-300: 158, 64%, 52%; // hsl(158, 64%, 52%)

        --color-teal-100: 172, 66%, 60%; // hsl(172, 66%, 60%)
        --color-teal-200: 172, 66%, 55%; // hsl(172, 66%, 55%)
        --color-teal-300: 172, 66%, 50%; // hsl(172, 66%, 50%)

        --color-cyan-100: 188, 86%, 63%; // hsl(188, 86%, 63%)
        --color-cyan-200: 188, 86%, 58%; // hsl(188, 86%, 58%)
        --color-cyan-300: 188, 86%, 53%; // hsl(188, 86%, 53%)

        --color-sky-100: 198, 93%, 70%; // hsl(198, 93%, 70%)
        --color-sky-200: 198, 93%, 65%; // hsl(198, 93%, 65%)
        --color-sky-300: 198, 93%, 60%; // hsl(198, 93%, 60%)

        --color-blue-100: 213, 94%, 78%; // hsl(213, 94%, 78%)
        --color-blue-200: 213, 94%, 73%; // hsl(213, 94%, 73%)
        --color-blue-300: 213, 94%, 68%; // hsl(213, 94%, 68%)

        --color-indigo-100: 234, 89%, 64%; // hsl(234, 89%, 64%)
        --color-indigo-200: 234, 89%, 69%; // hsl(234, 89%, 69%)
        --color-indigo-300: 234, 89%, 74%; // hsl(234, 89%, 74%)

        --color-violet-100: 255, 92%, 86%; // hsl(255, 92%, 86%)
        --color-violet-200: 255, 92%, 81%; // hsl(255, 92%, 81%)
        --color-violet-300: 255, 92%, 76%; // hsl(255, 92%, 76%)

        --color-purple-100: 270, 95%, 85%; // hsl(270, 95%, 85%)
        --color-purple-200: 270, 95%, 80%; // hsl(270, 95%, 80%)
        --color-purple-300: 270, 95%, 75%; // hsl(270, 95%, 75%)

        --color-fuchsia-100: 292, 91%, 83%; // hsl(292, 91%, 83%)
        --color-fuchsia-200: 292, 91%, 78%; // hsl(292, 91%, 78%)
        --color-fuchsia-300: 292, 91%, 73%; // hsl(292, 91%, 73%)

        --color-pink-100: 329, 86%, 80%; // hsl(329, 86%, 80%)
        --color-pink-200: 329, 86%, 75%; // hsl(329, 86%, 75%)
        --color-pink-300: 329, 86%, 70%; // hsl(329, 86%, 70%)

        --color-rose-100: 351, 95%, 81%; // hsl(351, 95%, 81%)
        --color-rose-200: 351, 95%, 76%; // hsl(351, 95%, 76%)
        --color-rose-300: 351, 95%, 71%; // hsl(351, 95%, 71%)

        .dark-image-section {
          display: block;
        }

        .light-image-section {
          display: none;
        }
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

        @media (max-width: 480px) {
          outline: none;

          -webkit-tap-highlight-color: transparent;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      }

      html {
        background: hsl(${THEME.colors["bg-100"]});
        color: hsl(${THEME.colors["fg-100"]});
        transition: background-color 200ms ease-in-out;
      }

      em {
        font-variation-settings: "ital" 1;
      }

      ::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
        background-color: hsla(${THEME.colors["bg-100"]}, 1);
      }

      ::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        background-color: hsla(${THEME.colors["fg-100"]}, 0.2);
        border: 2px solid hsla(${THEME.colors["bg-100"]}, 1);
      }
    `}
  />
);

export default GlobalTheme;
