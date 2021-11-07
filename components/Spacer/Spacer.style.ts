import styled from "@emotion/styled";

export type SpacerStyleVars = {
  "--height": string;
  "--width": string;
};

export const SpacerStyle = styled.div`
  height: var(--height);
  width: var(--width);
`;
