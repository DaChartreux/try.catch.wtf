import styled from "@emotion/styled";

import THEME from "@styles/theme";

export const PreContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 0 0 1.5rem 0;

  .icon {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const ContainerStyle = styled.div<{ hasFilename: boolean }>`
  background-color: hsla(${THEME.colors["fg-100"]}, 0.04);
  font-size: 1rem;
  border-radius: ${({ hasFilename }) =>
    hasFilename ? "0 0 0.375rem 0.375rem" : "0.375rem"};
  overflow: hidden;

  pre {
    padding: 0;
  }
`;

export const FilenameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 0.375rem 0.375rem 0 0;
  background-color: hsla(${THEME.colors["fg-100"]}, 0.06);
  padding: 1rem 2rem;
  font-family: ${THEME.fonts.monoFontFamily};

  svg {
    width: 1.125rem;
    height: 1.125rem;
    stroke-width: 2px;
  }
`;
