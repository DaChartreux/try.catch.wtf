import ExternalLinkIcon from "@components/icons/ExternalLinkIcon";
import { useAppThemeValue } from "@hooks/useAppThemeValue";
import { ColorShade } from "@typings/styled";
import Image from "next/image";
import styled from "styled-components";

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
    background-color: ${({ theme: { colors }, bgColor }) => colors[bgColor]}88;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 200ms ease-in-out;

    a {
      color: ${({ theme: { colors }, overlayFgColor }) =>
        colors[overlayFgColor]};
    }

    p {
      color: ${({ theme: { colors }, overlayFgColor }) =>
        colors[overlayFgColor]};
    }
  }

  &:hover {
    .overlay {
      opacity: 1;
      backdrop-filter: blur(3rem);
    }
  }
`;

type HeroProps = {
  heroSrc: StaticImageData;
  heroCreditUserProfile: string;
  heroCreditUserProfileUrl: string;
  heroCreditSource: string;
};

const Hero = ({
  heroSrc,
  heroCreditSource,
  heroCreditUserProfile,
  heroCreditUserProfileUrl,
}: HeroProps) => {
  return (
    <ImageContainer
      bgColor={useAppThemeValue<ColorShade>("white", "black")}
      overlayFgColor={useAppThemeValue<ColorShade>("black", "white")}
    >
      <div className="overlay">
        <div>
          <ExternalLinkIcon />
          <p>
            Photo by{" "}
            <a href={heroCreditUserProfileUrl}>{heroCreditUserProfile}</a> on{" "}
            {heroCreditSource}
          </p>
        </div>
      </div>
      <Image
        src={heroSrc}
        alt="Hero Image"
        className="image"
        placeholder="blur"
        layout="responsive"
        quality={80}
      />
    </ImageContainer>
  );
};

export default Hero;
