import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// import {
//   ImageContainerStyle,
//   HeroCreditStyle,
// } from "@components/Hero/Hero.style";

import style from "./Hero.module.css";

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
  <div style={{ margin: "0 2rem" }}>
    <motion.div layoutId={layoutId}>
      <div className={style.imageContainerStyle}>
        <motion.figure
          className={style.heroCreditStyle}
          whileHover={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <div style={{ display: "flex" }}>
            <p>
              Photo by{" "}
              <a
                href={heroCreditUserProfileUrl}
                target="_blank"
                rel="noreferrer"
              >
                {heroCreditUserProfile}
              </a>{" "}
              on {heroCreditSource}
            </p>
          </div>
        </motion.figure>
        <Image
          src={heroSrc}
          quality={60}
          width={3}
          height={2}
          layout="responsive"
          objectFit="cover"
          alt="Hero Image"
        />
      </div>
    </motion.div>
  </div>
);

export default Hero;
