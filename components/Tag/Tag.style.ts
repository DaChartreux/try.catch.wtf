import { motion } from "framer-motion";
import styled from "@emotion/styled";

export type TagStyleVars = {
  "--bg-color": string;
};

export const TagStyle = styled(motion.a)`
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin: 0 0.625rem 0.5rem 0;
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  color: hsl(var(--bg-color));

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
    border-color: hsl(var(--bg-color));
    background-color: hsla(var(--bg-color), 0.2);
  }

  &:hover {
    div {
      transform: scale(1.06);
      background-color: hsla(var(--bg-color), 0.3);
    }
  }

  &:active {
    div {
      transform: scale(1.03);
      background-color: hsla(var(--bg-color), 0.4);
    }
  }
`;
