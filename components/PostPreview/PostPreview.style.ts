import styled from "@emotion/styled";
import { motion } from "framer-motion";

import Heading from "@components/Heading";
import THEME from "@styles/theme";

export const MotionHeroStyled = styled(motion.div)`
  border-radius: 0.375rem;
  overflow: hidden;
  margin-bottom: 1rem;
  height: 100%;
  width: 100%;
  aspect-ratio: 3 / 2;
`;

export const PostFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  span {
    display: inline-flex;
    flex-direction: row;
    justify-content: start;

    svg {
      transition: 200ms ease-in-out;
      color: hsla(${THEME.colors["color-fg"]}, 0.5);
    }

    p {
      font-size: 0.875rem;
      color: hsla(${THEME.colors["color-fg"]}, 0.5);
      font-weight: 500;
      margin: auto 0.5rem;
    }
  }
`;

export const PostPreviewStyled = styled.a`
  cursor: pointer;
  padding: 0.75rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: 200ms ease-in-out;
  display: flex;
  flex-direction: column;
  border-color: hsla(${THEME.colors["color-fg"]}, 0.06);
  box-shadow: 0px 0.2px 0.5px rgba(0, 0, 0, 0.016),
    0px 0.6px 1.5px rgba(0, 0, 0, 0.024), 0px 1.4px 3.6px rgba(0, 0, 0, 0.032),
    0px 6px 12px rgba(0, 0, 0, 0.05);

  ${Heading} {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: hsla(${THEME.colors["color-fg"]}, 0.02);
    border-color: hsla(${THEME.colors["color-fg"]}, 0.08);

    ${PostFooter} {
      svg {
        color: hsla(${THEME.colors["color-fg"]}, 0.6);
      }
    }
  }
`;
