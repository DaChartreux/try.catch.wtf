import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Link from "next/link";

import Heading from "@components/Heading";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import { ColorShade } from "@typings/styled";
import { motion } from "framer-motion";
import heroImageMap from "@components/HeroImage";
import { HeroImageName } from "@typings/HeroImageName";

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
  border-radius: 0.5rem;
  border-width: 2px;
  border-style: solid;
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
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
        <motion.div layoutId={`${slug}__heading`}>
          <Heading
            fgColor={useAppThemeValue<ColorShade>("blue.600", "blue.200")}
            fontWeight={600}
            fontSize={"1.375rem"}
            margin={"1rem 0 0.5rem 0"}
          >
            {title}
          </Heading>
        </motion.div>
        <p className="description">{description}</p>
      </div>
    </PostPreviewStyled>
  </Link>
);

export default PostPreview;
