import React from "react";
import Image from "next/image";
import Link from "next/link";

import HeadingStyle from "@components/Heading";
import {
  MotionHeroStyled,
  PostFooter,
  PostPreviewStyled,
} from "@components/PostPreview/PostPreview.style";
import EyeIcon from "@components/icons/EyeIcon";

import type { Post } from "@typings/data";

type RecentPosts = Pick<Post, "title" | "slug" | "createdAt">;

const PostPreview = ({ title, slug, createdAt }: RecentPosts) => (
  <Link href={`/blog/${slug}`} passHref>
    <PostPreviewStyled>
      <MotionHeroStyled layoutId={`${slug}__hero`} whileHover={{ scale: 0.99 }}>
        <Image
          src={`/img/${slug}/hero.jpg`}
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
          <p>1.2k (dummy data)</p>
        </span>
        <span>
          <p>{createdAt}</p>
        </span>
      </PostFooter>
    </PostPreviewStyled>
  </Link>
);

export default PostPreview;
