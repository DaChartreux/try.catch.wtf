import React from "react";
import styled from "@emotion/styled";

import InfoIcon from "@icons/InfoIcon";
import THEME from "@styles/theme";

const BlockquoteStyle = styled.blockquote`
  position: relative;
  background-color: hsl(${THEME.colors["info-bg"]});
  border: 2px solid hsl(${THEME.colors["info-fg"]});
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 0 -1rem 2rem -1rem;
  padding: 1rem 1rem 1rem 2rem;

  .quote {
    font-size: 0.875rem;
    color: hsl(${THEME.colors["fg"]}, 1);
  }

  .quote-source {
    font-size: 1rem;
    color: hsl(${THEME.colors["info-fg"]}, 1);
  }
`;

const IconStyle = styled.div`
  position: absolute;
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.5rem;
  border-radius: 50%;
  left: -1.375rem;
  top: 1rem;
  color: hsl(${THEME.colors["info-bg"]});
  background-color: hsl(${THEME.colors["info-fg"]});
`;

const Blockquote = ({ children }: any) => (
  <BlockquoteStyle>
    <IconStyle>
      <InfoIcon />
    </IconStyle>
    <p className="quote">
      {children.length ? children[0].props.children : children.props.children}
    </p>
    {children.length === 2 && (
      <p className="quote-source">{children[1].props.children}</p>
    )}
  </BlockquoteStyle>
);

export default Blockquote;
