import React from "react";

import style from "./Spacer.module.css";

type SpacerStyleVars = {
  "--height": string;
  "--width": string;
};

type SpacerProps = {
  width?: string;
  height?: string;
};

const Spacer = ({ height, width }: SpacerProps) => {
  const styleVars: SpacerStyleVars = {
    "--height": height!,
    "--width": width!,
  };

  return <div className={style.spacer} style={styleVars as any} />;
};

Spacer.defaulProps = {
  height: "0px",
  width: "0px",
};

export default Spacer;
