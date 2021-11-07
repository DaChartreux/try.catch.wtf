import React from "react";

import { SpacerStyle } from "@components/Spacer/Spacer.style";

import type { SpacerStyleVars } from "@components/Spacer/Spacer.style";

type SpacerProps = {
  width?: string;
  height?: string;
};

const Spacer = ({ height, width }: SpacerProps) => {
  const style: SpacerStyleVars = {
    "--height": height!,
    "--width": width!,
  };

  return <SpacerStyle style={style as any} />;
};

Spacer.defaulProps = {
  height: "0px",
  width: "0px",
};

export default Spacer;
