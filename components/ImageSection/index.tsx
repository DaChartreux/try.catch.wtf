import React from "react";
import Image from "next/image";

import { ImageSectionStyle } from "@components/ImageSection/ImageSection.style";

type ImageSectionProps = {
  src: string;
  title: string;
  width: number;
  height: number;
};

const ImageSection = ({ src, width, height, title }: ImageSectionProps) => (
  <ImageSectionStyle>
    <Image src={src} width={width} height={height} alt={title} />
    {/* <Image
        className="dark"
        src={src}
        width={width}
        height={height}
        alt={title}
      /> */}
    <p>{title}</p>
  </ImageSectionStyle>
);
export default ImageSection;
