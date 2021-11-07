import React from "react";
import Image from "next/image";
import Link from "next/link";

import Heading from "@components/Heading";
import {
  MotionHeroStyle,
  PostFooter,
  PostPreviewStyle,
} from "@components/PostPreview/PostPreview.style";
import EyeIcon from "@components/icons/EyeIcon";

import type { Post } from "@typings/data";

type RecentPosts = Pick<Post, "title" | "slug" | "updatedAt">;

const PostPreview = ({ title, slug, updatedAt }: RecentPosts) => (
  <Link href={`/blog/${slug}`} passHref>
    <PostPreviewStyle>
      <MotionHeroStyle layoutId={`${slug}__hero`}>
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
      </MotionHeroStyle>
      <Heading
        fgColor="primary-100"
        fontSize="1.375rem"
        fontWeight={500}
        margin="0"
      >
        {title}
      </Heading>
      <PostFooter>
        <span>
          <EyeIcon />
          <p>1.2k (dummy data)</p>
        </span>
        <span>
          <p>{updatedAt}</p>
        </span>
      </PostFooter>
    </PostPreviewStyle>
  </Link>
);

export default PostPreview;
