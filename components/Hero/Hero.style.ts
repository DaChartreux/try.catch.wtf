import styled from "@emotion/styled";
import { motion } from "framer-motion";

import THEME from "@styles/theme";

export const ImageContainerStyle = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
`;

export const HeroCreditStyle = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: hsla(${THEME.colors["bg-100"]}, 0.4);
  backdrop-filter: blur(3rem);

  a {
    color: hsl(${THEME.colors["fg-100"]});
  }

  p {
    margin: auto;
    color: hsl(${THEME.colors["fg-100"]});
  }
`;
