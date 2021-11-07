import styled from "@emotion/styled";

export type HeadingStyleVars = {
  "--fg-color": string;
  "--font-size": string;
  "--font-weight": number;
  "--margin": string;
};

export const HeadingStyle = styled.h1`
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: hsla(var(--fg-color));
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  margin: var(--margin);
  width: fit-content;
`;
