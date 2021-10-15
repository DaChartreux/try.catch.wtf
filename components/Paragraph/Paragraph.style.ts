import styled from "@emotion/styled";

import THEME from "@styles/theme";

export const ParagraphStyle = styled.p`
  color: hsla(${THEME.colors["fg-200"]}, 0.85);
  font-size: 1.125rem;
  font-weight: 400;

  code {
    color: hsl(${THEME.colors["red-300"]});
    background-color: hsla(${THEME.colors["fg-100"]}, 0.1);
    padding: 0 0.25rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;
