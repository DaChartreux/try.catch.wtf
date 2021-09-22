import React from "react";

import { classNames } from "@lib/classNames";

type ButtonStyleProps = {
  bgColor: string;
  hoverBgColor: string;
  activeBgColor: string;
  fgColor: string;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({
  children,
  onClick,
  bgColor,
  hoverBgColor,
  activeBgColor,
  fgColor,
}: ButtonProps & ButtonStyleProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        bgColor,
        hoverBgColor,
        activeBgColor,
        fgColor,
        "p-2 rounded-md duration-200 ease-in-out"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
