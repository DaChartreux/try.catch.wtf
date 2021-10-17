import styled from "@emotion/styled";

import THEME from "@styles/theme";

export const ParagraphStyle = styled.p`
  margin: 0 0 1.5rem 0;
  color: hsla(${THEME.colors["fg-200"]}, 0.85);
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";

  code {
    color: hsl(${THEME.colors["red-300"]});
    background-color: hsla(${THEME.colors["fg-100"]}, 0.1);
    padding: 0 0.25rem;
    font-size: 1rem;
  }
`;
