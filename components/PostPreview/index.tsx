import React from "react";
import Image from "next/image";
import Link from "next/link";

import HeadingStyle from "@components/Heading";
import heroImageMap from "@components/HeroImage";
import {
  MotionHeroStyled,
  PostFooter,
  PostPreviewStyled,
} from "@components/PostPreview/PostPreview.style";
import EyeIcon from "@components/icons/EyeIcon";

import type { Post } from "@typings/data";

type RecentPosts = Pick<
  Post,
  | "title"
  | "description"
  | "categories"
  | "slug"
  | "createdAt"
  | "heroImageName"
>;

const PostPreview = ({
  title,
  slug,
  heroImageName,
  createdAt,
}: RecentPosts) => (
  <Link href={`/blog/${slug}`} passHref>
    <PostPreviewStyled>
      <MotionHeroStyled layoutId={`${slug}__hero`} whileHover={{ scale: 0.99 }}>
        <Image
          src={heroImageMap[`${heroImageName}`]}
          quality={60}
          width={3}
          height={2}
          layout="responsive"
          objectFit="cover"
          alt="hero"
          priority
        />
      </MotionHeroStyled>
      <HeadingStyle
        fgColor="primary-100"
        fontSize="1.375rem"
        margin="0"
        fontWeight={500}
      >
        {title}
      </HeadingStyle>
      <PostFooter>
        <span>
          <EyeIcon />
          <p>1.2k</p>
        </span>
        <span>
          <p>{createdAt}</p>
        </span>
      </PostFooter>
    </PostPreviewStyled>
  </Link>
);

export default PostPreview;
