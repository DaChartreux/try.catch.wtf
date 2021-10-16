import styled from "@emotion/styled";
import { motion } from "framer-motion";

import THEME from "@styles/theme";

type HeadingStyledProps = {
  fgColor: keyof typeof THEME["colors"];
  fontSize: string;
  margin: string;
};

const Heading = styled(motion.p)<HeadingStyledProps>`
  line-height: 1.2;
  font-weight: 600;
  color: hsla(${({ fgColor }) => THEME.colors[fgColor]});
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
`;

export default Heading;
