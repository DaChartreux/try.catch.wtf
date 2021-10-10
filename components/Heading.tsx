import styled from "@emotion/styled";
import { motion } from "framer-motion";

import THEME from "@styles/theme";

type HeadingStyledProps = {
  fgColor: keyof typeof THEME["colors"];
  fontWeight: number;
  fontSize: string;
  margin: string;
};

const Heading = styled(motion.h1)<HeadingStyledProps>`
  color: hsla(${({ fgColor }) => THEME.colors[fgColor]});
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
`;

export default Heading;
