import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

import Heading from "@components/Heading";
import heroImageMap from "@components/HeroImage";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import { HeroImageName } from "@typings/HeroImageName";
import { ColorShade } from "@typings/emotion";

type RecentPosts = {
  title: string;
  description: string;
  categories: string[];
  slug: string;
  hero: HeroImageName;
};

type PostPreviewStyledProps = {
  fgColor: ColorShade;
  bgColor: ColorShade;
  fgHoverColor: ColorShade;
  descriptionColor: ColorShade;
};

const PostPreviewStyled = styled.a<PostPreviewStyledProps>`
  padding: 0.75rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.5rem;
  text-decoration: none;

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

  .heroImage {
    border-radius: 0.375rem;
  }

  .description {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    text-overflow: ellipsis;
  }
`;

const PostPreview = ({ title, description, slug, hero }: RecentPosts) => (
  <Link href={`blog/${slug}`} passHref>
    <PostPreviewStyled
      bgColor={useAppThemeValue<ColorShade>("gray.100", "gray.900")}
      fgColor={useAppThemeValue<ColorShade>("blue.600", "blue.100")}
      fgHoverColor={useAppThemeValue<ColorShade>("blue.800", "blue.400")}
      descriptionColor={useAppThemeValue<ColorShade>("gray.900", "gray.100")}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <motion.div layoutId={`${slug}__hero`}>
          <Image
            className="heroImage"
            src={heroImageMap[`${hero}_s`]}
            quality={60}
            alt="hero"
          />
        </motion.div>
        <Heading
          fgColor={useAppThemeValue<ColorShade>("blue.600", "blue.200")}
          fontWeight={600}
          fontSize={"1.375rem"}
          margin={"1rem 0 0.5rem 0"}
        >
          {title}
        </Heading>
        <p className="description">{description}</p>
      </div>
    </PostPreviewStyled>
  </Link>
);

export default PostPreview;
