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
  bgColor: ColorShade;
  fgHoverColor: ColorShade;
  descriptionColor: ColorShade;
};

const PostPreviewStyled = styled.div<PostPreviewStyledProps>`
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  border-width: 2px;
  border-style: solid;

  ${({ theme: { colors }, fgColor, bgColor, fgHoverColor, descriptionColor }) =>
    css`
      background-color: ${colors[bgColor]}22;
      border-color: ${colors[bgColor]}66;

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
    bgColor={useAppThemeValue<ColorShade>("gray.100", "gray.900")}
    fgColor={useAppThemeValue<ColorShade>("blue.600", "blue.100")}
    fgHoverColor={useAppThemeValue<ColorShade>("blue.800", "blue.400")}
    descriptionColor={useAppThemeValue<ColorShade>("gray.900", "gray.100")}
  >
    <Heading
      fgColor={useAppThemeValue<ColorShade>("blue.600", "blue.200")}
      fontWeight={600}
      fontSize={"1.375rem"}
    >
      {title}
    </Heading>
    <p>{description}</p>
  </PostPreviewStyled>
);

export default PostPreview;
