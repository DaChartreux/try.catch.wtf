import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { ColorShade } from "@typings/styled";
import { motion } from "framer-motion";

type TagStyledProps = {
  bgColor: ColorShade;
  fgColor: string;
};

type TagProps = {
  href: string;
  children: ReactNode;
};

const TagStyle = styled(motion.a)<TagStyledProps>`
  font-size: 0.75rem;
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
    transition: background-color 100ms ease-in-out;
  }

  ${({ theme: { colors }, bgColor }) => css`
    color: ${colors[bgColor]};

    div {
      border-color: ${colors[bgColor]};
      background-color: ${colors[bgColor]}33;
    }

    &:hover {
      div {
        background-color: ${colors[bgColor]}55;
      }
    }

    &:active {
      div {
        background-color: ${colors[bgColor]}66;
      }
    }
  `};
`;

const Tag = ({ children, ...props }: TagProps & TagStyledProps) => (
  <TagStyle
    variants={{
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    }}
    {...props}
  >
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 1.03,
      }}
    />
    {children}
  </TagStyle>
);

export default Tag;
