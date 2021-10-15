import styled from "@emotion/styled";

import THEME from "@styles/theme";

export const FooterWrapper = styled.footer`
  background-color: hsl(${THEME.colors["primary-200"]});
  box-sizing: border-box;
  padding: 2rem;
  color: black;
`;

export const FooterTopWrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 1200px;
  height: 10rem;
  color: hsl(${THEME.colors["bg-100"]});
  border-bottom: 1px solid hsl(${THEME.colors["bg-100"]});

  .links {
    margin-top: 1rem;

    button {
      margin-right: 1rem;
    }

    svg {
      width: 1.2rem;
    }
  }
`;

export const FooterBottomWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
  color: hsl(${THEME.colors["bg-100"]});
`;
