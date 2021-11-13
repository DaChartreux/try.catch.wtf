import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Heading from "@components/Heading";

import type { Post } from "@typings/data";

import style from "./PostPreview.module.css";

type RecentPosts = Pick<Post, "title" | "slug" | "updatedAt">;

const PostPreview = ({ title, slug, updatedAt }: RecentPosts) => (
  <Link href={`/blog/${slug}`} passHref>
    <div className={style.postPreviewStyle}>
      <motion.figure
        className={style.motionHeroStyle}
        layoutId={`${slug}__hero`}
      >
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
      </motion.figure>
      <Heading
        fgColor="primary-100"
        fontSize="1.375rem"
        fontWeight={500}
        margin="0"
      >
        {title}
      </Heading>
      <footer className={style.postFooter}>
        <span>
          {/* <EyeIcon />
          <p>1.2k (dummy data)</p> */}
        </span>
        <span>
          <p>{updatedAt}</p>
        </span>
      </footer>
    </div>
  </Link>
);

export default PostPreview;
