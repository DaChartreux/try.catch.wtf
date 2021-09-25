import styled from "styled-components";

type HeadingStyledProps = {
  fgColor: string;
  fontWeight: number;
  fontSize: string;
};

const Heading = styled.h1<HeadingStyledProps>`
  color: ${({ fgColor }) => fgColor};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
`;

export default Heading;
