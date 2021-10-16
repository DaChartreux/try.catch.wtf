import { css } from "@emotion/react";

const FONT_FAMILIES = css`
  @font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(""), url("/fonts/Jost/Jost-400.woff2") format("woff2"),
      url("/fonts/Jost/Jost-400.woff") format("woff");
  }

  @font-face {
    font-family: "Jost";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(""), url("/fonts/Jost/Jost-600.woff2") format("woff2"),
      url("/fonts/Jost/Jost-600.woff") format("woff");
  }

  @font-face {
    font-family: "Iosevka";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Iosevka/Iosevka-400.woff2") format("woff2");
  }

  @font-face {
    font-family: "Iosevka";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Iosevka/Iosevka-400-oblique.woff2") format("woff2");
  }

  @font-face {
    font-family: "Iosevka";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url("/fonts/Iosevka/Iosevka-600.woff2") format("woff2");
  }

  @font-face {
    font-family: "Iosevka";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url("/fonts/Iosevka/Iosevka-600-oblique.woff2") format("woff2");
  }
`;

export default FONT_FAMILIES;
