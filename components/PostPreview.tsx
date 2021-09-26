import React from "react";
import styled, { css } from "styled-components";

import Heading from "@components/Heading";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import { ColorShade } from "@typings/styled";

type RecentPosts = {
  title: string;
  description: string;
  categories: string[];
  slug: string;
};

type PostPreviewStyledProps = {
  fgColor: ColorShade;
  fgHoverColor: ColorShade;
  descriptionColor: ColorShade;
};

const PostPreviewStyled = styled.div<PostPreviewStyledProps>`
  margin-bottom: 3.5rem;

  ${({ theme: { colors }, fgColor, fgHoverColor, descriptionColor }) =>
    css`
      h1 {
        color: ${colors[fgColor]};
      }

      p {
        color: ${colors[descriptionColor]};
      }

      &:hover {
        h1 {
          color: ${colors[fgHoverColor]};
        }
      }
    `}
`;

const PostPreview = ({ title, description }: RecentPosts) => (
  <PostPreviewStyled
    fgColor={useAppThemeValue<ColorShade>("blue.600", "blue.100")}
    fgHoverColor={useAppThemeValue<ColorShade>("blue.800", "blue.400")}
    descriptionColor={useAppThemeValue<ColorShade>("gray.900", "gray.100")}
  >
    <Heading
      fgColor={useAppThemeValue<ColorShade>("blue.600", "blue.200")}
      fontWeight={500}
      fontSize={"1.2rem"}
    >
      {title}
    </Heading>
    <p>{description}</p>
  </PostPreviewStyled>
);

export default PostPreview;
