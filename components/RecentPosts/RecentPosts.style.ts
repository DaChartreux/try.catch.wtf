import styled from "@emotion/styled";

export const PostsGridStyle = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 1536px) {
  }

  @media (max-width: 1280px) {
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
