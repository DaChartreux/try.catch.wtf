import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

import Heading from "@components/Heading";
import ExternalLinkIcon from "@components/icons/ExternalLinkIcon";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import { ColorShade } from "@typings/emotion";

type ImageContainerProps = {
  bgColor: ColorShade;
  overlayFgColor: ColorShade;
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
    background-color: ${({ theme: { colors }, bgColor }) => colors[bgColor]}88;
    backdrop-filter: blur(3rem);

    ${({ theme: { colors }, overlayFgColor }) => css`
      a {
        color: ${colors[overlayFgColor]};
      }

      p {
        color: ${colors[overlayFgColor]};
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
    <ImageContainer
      bgColor={useAppThemeValue<ColorShade>("white", "black")}
      overlayFgColor={useAppThemeValue<ColorShade>("black", "white")}
    >
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
            fgColor="green.300"
            fontWeight={600}
            fontSize={"3rem"}
            margin={"1rem 0 0.5rem 0"}
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
          alt="Hero Image"
          className="image"
          placeholder="blur"
          layout="responsive"
          quality={80}
        />
      </motion.div>
    </ImageContainer>
  );
};

export default Hero;
