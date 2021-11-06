import styled from "@emotion/styled";
import { motion } from "framer-motion";

import THEME from "@styles/theme";

type HeadingStyledProps = {
  fgColor: keyof typeof THEME["colors"];
  fontSize: string;
  fontWeight?: number;
  margin?: string;
};

const Heading = styled(motion.h1)<HeadingStyledProps>`
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: hsla(${({ fgColor }) => THEME.colors[fgColor]});
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  width: fit-content;
`;

Heading.defaultProps = {
  margin: "0 0 1rem 0",
  fontWeight: 750,
};

export default Heading;
