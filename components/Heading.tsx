import styled from "styled-components";

import { ColorShade } from "@typings/styled";

type HeadingStyledProps = {
  fgColor: ColorShade;
  fontWeight: number;
  fontSize: string;
};

const Heading = styled.h1<HeadingStyledProps>`
  color: ${({ theme: { colors }, fgColor }) => colors[fgColor]};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  margin: 0 0 1.75rem 0;
`;

export default Heading;
