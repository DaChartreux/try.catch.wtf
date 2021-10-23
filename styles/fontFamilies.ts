import { css } from "@emotion/react";

const FONT_FAMILIES = css`
  @font-face {
    font-family: Dumm;
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    src: url("/fonts/Jost/Jost-VF.woff2") format("woff2-variations"),
      url("/fonts/Jost/Jost-VF.woff") format("woff-variations");
  }

  @font-face {
    font-family: Jost VF;
    font-weight: 100 900;
    font-display: swap;
    font-style: normal;
    src: url("/fonts/Jost/Jost-VF.woff2") format("woff2-variations"),
      url("/fonts/Jost/Jost-VF.woff") format("woff-variations");
  }

  @font-face {
    font-family: Jost VF;
    font-weight: 100 900;
    font-display: swap;
    font-style: italic;
    src: url("/fonts/Jost/Jost-VF.woff2") format("woff2-variations"),
      url("/fonts/Jost/Jost-VF.woff") format("woff-variations");
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
