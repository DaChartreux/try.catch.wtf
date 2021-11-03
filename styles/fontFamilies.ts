import { css } from "@emotion/react";

const FONT_FAMILIES = css`
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
`;

export default FONT_FAMILIES;
