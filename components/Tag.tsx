import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { ColorShade } from "@typings/styled";

type TagStyledProps = {
  color: ColorShade;
  fgColor: string;
};

type TagProps = {
  href: string;
  children: ReactNode;
};

const TagStyle = styled.a<TagStyledProps>`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0 0.625rem 0.5rem 0;
  display: inline-block;
  position: relative;

  div {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    border-style: solid;
    border-radius: 0.375rem;
    border-width: 2px;
  }

  ${({ theme: { colors }, color }) => css`
    color: ${colors[color]};

    div {
      border-color: ${colors[color]};
      background-color: ${colors[color]}33;
    }

    &:hover {
      div {
        transform: scale(1.05);
        background-color: ${colors[color]}55;
      }
    }

    &:active {
      div {
        background-color: ${colors[color]}66;
      }
    }
  `};
`;

const Tag = ({ children, ...props }: TagProps & TagStyledProps) => (
  <TagStyle {...props}>
    <div />
    {children}
  </TagStyle>
);

export default Tag;
