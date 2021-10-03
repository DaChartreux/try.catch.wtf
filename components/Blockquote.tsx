import React from "react";
import styled from "@emotion/styled";

import InfoIcon from "@icons/InfoIcon";

const BlockquoteStyle = styled.blockquote`
  position: relative;
  background-color: ${({ theme }) => theme.colors["blue.2300"]};
  border: 2px solid ${({ theme }) => theme.colors["blue.2100"]};
  border-radius: 0.5rem;
  margin: 0 -1rem 2rem -1rem;
  padding: 1rem 1rem 1rem 2rem;

  .quote {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors["blue.300"]};

    ::after {
      content: '"';
    }

    ::before {
      content: '"';
    }
  }

  .quote-source {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors["blue.1600"]};
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
  color: ${({ theme }) => theme.colors["blue.600"]};
  background-color: ${({ theme }) => theme.colors["blue.2100"]};
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
