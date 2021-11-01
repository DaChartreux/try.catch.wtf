import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import {
  ImageContainerStyle,
  HeroCreditStyle,
} from "@components/Hero/Hero.style";

type HeroProps = {
  heroSrc: string;
  title: string;
  heroCreditUserProfile: string;
  heroCreditUserProfileUrl: string;
  heroCreditSource: string;
  layoutId: string;
};

const Hero = ({
  heroSrc,
  heroCreditSource,
  heroCreditUserProfile,
  heroCreditUserProfileUrl,
  layoutId,
}: HeroProps) => (
  <ImageContainerStyle>
    <HeroCreditStyle
      className="overlay"
      whileHover={{ opacity: [null, 0.15, 0.8, 1] }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div style={{ display: "flex" }}>
        <p>
          Photo by{" "}
          <a href={heroCreditUserProfileUrl} target="_blank" rel="noreferrer">
            {heroCreditUserProfile}
          </a>{" "}
          on {heroCreditSource}
        </p>
      </div>
    </HeroCreditStyle>
    <motion.div
      layoutId={layoutId}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Image
        src={heroSrc}
        quality={60}
        width={3}
        height={2}
        layout="responsive"
        objectFit="cover"
        alt="Hero Image"
      />
    </motion.div>
  </ImageContainerStyle>
);

export default Hero;
