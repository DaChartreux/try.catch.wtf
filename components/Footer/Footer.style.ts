import styled from "@emotion/styled";

import THEME from "@styles/theme";

export const FooterWrapper = styled.footer`
  background-color: hsl(${THEME.colors["color-primary-200"]});
  box-sizing: border-box;
  padding: 3rem 2rem 1rem 2rem;
  color: black;
`;

export const FooterTopWrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: 1200px;
  height: 10rem;

  border-bottom: 1px solid hsl(${THEME.colors["color-bg"]});

  span {
    align-items: flex-end;
    display: inline-flex;

    p {
      margin: 0;
      line-height: 0.8;
    }

    p:nth-child(2) {
      font-weight: 600;
      font-size: 2rem;
    }
  }
`;

export const FooterBottomWrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 1200px;
`;
