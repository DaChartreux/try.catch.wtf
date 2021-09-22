import styled from "styled-components";

type SpacerStyledProps = {
  height: string;
  width: string;
};

const Spacer = styled.div<SpacerStyledProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export default Spacer;
