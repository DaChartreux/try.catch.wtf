import styled from "@emotion/styled";

import { ColorShade } from "@typings/emotion";
import { motion } from "framer-motion";

type HeadingStyledProps = {
  fgColor: ColorShade;
  fontWeight: number;
  fontSize: string;
  margin: string;
};

const Heading = styled(motion.h1)<HeadingStyledProps>`
  color: ${({ theme: { colors }, fgColor }) => colors[fgColor]};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
`;

export default Heading;
