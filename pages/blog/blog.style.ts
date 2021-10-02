import styled from "@emotion/styled";
import Layout from "@components/Layout";

export const LayoutWrapper = styled(Layout)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "hero hero"
    "recent categories"
    "recent categories";
  gap: 3rem;
`;
