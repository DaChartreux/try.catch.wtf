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
    <div>
      <Image src={src} width={width} height={height} alt={title} />
    </div>
    <p>{title}</p>
  </ImageSectionStyle>
);
export default ImageSection;
