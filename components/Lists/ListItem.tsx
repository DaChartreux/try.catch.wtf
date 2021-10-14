import styled from "@emotion/styled";

import THEME from "@styles/theme";

const ListItemStyle = styled.li`
  font-size: 1.125rem;
  color: hsla(${THEME.colors["fg"]}, 0.85);

  &::marker {
    color: hsla(${THEME.colors["fg"]}, 0.5);
    font-size: 1rem;
  }
`;

export default ListItemStyle;
