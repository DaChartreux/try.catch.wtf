import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

import { ColorShade } from "@typings/emotion";

type TagStyledProps = {
  bgColor: ColorShade;
  fgColor: string;
};

type TagProps = {
  href: string;
  children: ReactNode;
};

const TagStyle = styled(motion.a)<TagStyledProps>`
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin: 0 0.625rem 0.5rem 0;
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;

  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-style: solid;
    border-radius: 0.375rem;
    transition: all 200ms ease-in-out;
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
