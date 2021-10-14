import React from "react";
import Image from "next/image";
import Link from "next/link";

import Heading from "@components/Heading";
import heroImageMap from "@components/HeroImage";
import { HeroImageName } from "@typings/heroImageName";
import {
  MotionHeroStyled,
  PostFooter,
  PostPreviewStyled,
} from "@components/PostPreview/PostPreview.style";
import EyeIcon from "@components/icons/EyeIcon";
import CalendarIcon from "@components/icons/CalendarIcon";

type RecentPosts = {
  title: string;
  description: string;
  categories: string[];
  slug: string;
  hero: HeroImageName;
};

const PostPreview = ({ title, slug, hero }: RecentPosts) => (
  <Link href={`/blog/${slug}`} passHref>
    <PostPreviewStyled>
      <MotionHeroStyled layoutId={`${slug}__hero`} whileHover={{ scale: 0.99 }}>
        <Image
          src={heroImageMap[`${hero}_s`]}
          quality={60}
          width={3}
          height={2}
          layout="responsive"
          objectFit="cover"
          alt="hero"
        />
      </MotionHeroStyled>
      <Heading
        fgColor="primary-100"
        fontWeight={600}
        fontSize="1.375rem"
        margin="0"
      >
        {title}
      </Heading>
      <PostFooter>
        <span>
          <EyeIcon />
          <p>1.2k</p>
        </span>
        <span>
          <CalendarIcon />
          <p>Oct 10</p>
        </span>
      </PostFooter>
    </PostPreviewStyled>
  </Link>
);

export default PostPreview;
