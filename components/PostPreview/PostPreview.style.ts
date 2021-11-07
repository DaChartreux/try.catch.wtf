import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { HeadingStyle } from "@components/Heading/Heading.style";
import THEME from "@styles/theme";

export const MotionHeroStyle = styled(motion.figure)`
  border-radius: 0.375rem;
  overflow: hidden;
  margin: 0 0 1rem 0;
  width: 100%;
  aspect-ratio: 3 / 2;
`;

export const PostFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.25rem;

  span {
    display: inline-flex;
    flex-direction: row;
    justify-content: start;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      transition: 200ms ease-in-out;
      color: hsla(${THEME.colors["fg-200"]}, 0.5);
    }

    p {
      font-size: 0.875rem;
      color: hsla(${THEME.colors["fg-200"]}, 0.5);
      font-weight: 600;
      margin: auto 0.5rem;
    }
  }
`;

export const PostPreviewStyle = styled.a`
  cursor: pointer;
  padding: 0.75rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: 200ms ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: hsla(${THEME.colors["bg-100"]});
  border-color: hsla(${THEME.colors["fg-100"]}, 0.08);
  box-shadow: rgb(0 0 0 / 5%) 0px 1px 0px, rgb(0 0 0 / 3%) 0px 0px 8px,
    rgb(0 0 0 / 2%) 0px 30px 30px;

  ${HeadingStyle} {
    margin-bottom: 1rem;
    transition: 200ms ease-in-out;
  }

  &:hover {
    background-color: hsla(${THEME.colors["bg-200"]}, 0.1);
    border-color: hsla(${THEME.colors["fg-100"]}, 0.12);
    box-shadow: rgb(0 0 0 / 7%) 0px 100px 80px, rgb(0 0 0 / 5%) 0px 42px 33px,
      rgb(0 0 0 / 4%) 0px 22px 17px, rgb(0 0 0 / 3%) 0px 12px 10px,
      rgb(0 0 0 / 2%) 0px 6px 5px, rgb(0 0 0 /1%) 0px 3px 3px;

    ${PostFooter} {
      svg {
        color: hsla(${THEME.colors["fg-200"]}, 0.6);
      }
    }
  }
`;
