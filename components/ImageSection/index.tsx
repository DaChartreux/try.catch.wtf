import React from "react";
import Image from "next/image";

import style from "./ImageSection.module.css";

type ImageSectionProps = {
  baseUrl: string;
  srcLight: string;
  srcDark: string;
  title: string;
  width: number;
  height: number;
};

const ImageSection = ({
  baseUrl,
  srcLight,
  width,
  height,
  title,
  srcDark = srcLight,
}: ImageSectionProps) => (
  <div className={style.imageSection}>
    <div className="light-image-section">
      <Image
        src={`${baseUrl}/${srcLight}`}
        width={width}
        height={height}
        alt={title}
        quality={80}
      />
    </div>
    <div className="dark-image-section">
      <Image
        src={`${baseUrl}/${srcDark}`}
        width={width}
        height={height}
        alt={title}
        quality={80}
      />
    </div>
    <p>{title}</p>
  </div>
);
export default ImageSection;
