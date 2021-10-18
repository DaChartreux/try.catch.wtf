import styled from "@emotion/styled";
import THEME from "@styles/theme";
import { motion } from "framer-motion";

export const BlogAnchorHeadingStyle = styled(motion.a)`
  position: relative;
  scroll-margin-top: 5rem;
  text-decoration: none;
  width: min-content;

  div {
    opacity: 0;
  }
`;

export const BlogAnchorIconStyle = styled(motion.div)`
  position: absolute;
  right: 0.5rem;
  margin-top: 0.25rem;

  svg {
    line-height: 1.2;
    color: hsl(${THEME.colors["primary-100"]});
    width: 1.5rem;
    height: 1.5rem;
  }
`;
