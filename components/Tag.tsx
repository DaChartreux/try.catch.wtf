import styled, { css } from "styled-components";

import { ColorShade } from "@typings/styled";

type TagStyledProps = {
  color: ColorShade;
  fgColor: string;
};

const Tag = styled.a<TagStyledProps>`
  border-style: solid;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  border-width: 2px;
  padding: 0.25rem 0.5rem;
  text-decoration: none;

  ${({ theme: { colors }, color }) => css`
    border-color: ${colors[color]};
    background-color: ${colors[color]}33;
    color: ${colors[color]};

    &:hover {
      background-color: ${colors[color]}44;
    }

    &:active {
      background-color: ${colors[color]}55;
    }
  `}
`;

export default Tag;
