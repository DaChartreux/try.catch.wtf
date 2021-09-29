import styled from "styled-components";

import { ColorShade } from "@typings/styled";

type HeadingStyledProps = {
  fgColor: ColorShade;
  fontWeight: number;
  fontSize: string;
  margin: string;
};

const Heading = styled.h1<HeadingStyledProps>`
  color: ${({ theme: { colors }, fgColor }) => colors[fgColor]};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
`;

export default Heading;
