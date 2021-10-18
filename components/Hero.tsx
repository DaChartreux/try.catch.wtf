import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

import ExternalLinkIcon from "@components/icons/ExternalLinkIcon";
import THEME from "@styles/theme";

const ImageContainerStyle = styled.div`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  .overlay {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: hsla(${THEME.colors["bg-100"]}, 0.5);
    backdrop-filter: blur(3rem);

    a {
      color: rgb(var(${THEME.colors["bg-100"]}));
    }

    p {
      color: rgb(var(${THEME.colors["bg-100"]}));
    }
  }
`;

type HeroProps = {
  heroSrc: StaticImageData;
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
}: HeroProps) => {
  return (
    <ImageContainerStyle>
      <motion.div
        className="overlay"
        whileHover={{ opacity: [null, 0.15, 0.8, 1] }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div>
          <ExternalLinkIcon />
          <p>
            Photo by{" "}
            <a href={heroCreditUserProfileUrl}>{heroCreditUserProfile}</a> on{" "}
            {heroCreditSource}
          </p>
        </div>
      </motion.div>
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
};

export default Hero;
