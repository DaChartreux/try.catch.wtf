import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

import Heading from "@components/Heading";
import ExternalLinkIcon from "@components/icons/ExternalLinkIcon";
import THEME from "@styles/theme";

type ImageContainerProps = {
  bgColor: keyof typeof THEME["colors"];
  overlayFgColor: keyof typeof THEME["colors"];
};

const ImageContainer = styled.div<ImageContainerProps>`
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
    background-color: hsla(${({ bgColor }) => THEME.colors[bgColor]}, 0.5);
    backdrop-filter: blur(3rem);

    ${({ overlayFgColor }) => css`
      a {
        color: rgb(var(${THEME.colors[overlayFgColor]}));
      }

      p {
        color: rgb(var(${THEME.colors[overlayFgColor]}));
      }
    `}
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
  title,
  heroCreditSource,
  heroCreditUserProfile,
  heroCreditUserProfileUrl,
  layoutId,
}: HeroProps) => {
  return (
    <ImageContainer bgColor="bg-100" overlayFgColor="bg-100">
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
        <div
          className="test"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <Heading
            fgColor="green-100"
            fontSize="3rem"
            margin="1rem 0 0.5rem 0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, translateY: -32 },
              visible: {
                opacity: 1,
                translateY: 0,
              },
            }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {title}
          </Heading>
        </div>
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
    </ImageContainer>
  );
};

export default Hero;
