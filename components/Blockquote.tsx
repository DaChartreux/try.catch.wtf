import React from "react";
import styled from "@emotion/styled";

import InfoIcon from "@icons/InfoIcon";
import THEME from "@styles/theme";
import { ParagraphStyle } from "@components/Paragraph/Paragraph.style";

type BlockquoteProps = {
  children: string;
  type: "info" | "warning";
};

const BlockquoteStyle = styled.blockquote`
  position: relative;
  background-color: hsla(${THEME.colors["info-fg"]}, 0.2);
  border: 2px solid hsl(${THEME.colors["info-fg"]});
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 0 0 1rem 0;
  padding: 2rem 1.5rem 2rem 2rem;

  ${ParagraphStyle} {
    margin: 0;
    color: hsla(${THEME.colors["info-fg"]}, 1);
  }

  .quote-source {
    font-size: 1rem;
    color: hsla(${THEME.colors["info-fg"]}, 1);
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
  color: hsla(${THEME.colors["bg-100"]}, 0.8);
  background-color: hsl(${THEME.colors["info-fg"]});
`;

const Blockquote = ({ children, type }: BlockquoteProps) => (
  <BlockquoteStyle>
    <IconStyle>
      <InfoIcon />
    </IconStyle>
    {children}
  </BlockquoteStyle>
);

export default Blockquote;
