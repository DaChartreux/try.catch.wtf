import React from "react";

import InfoIcon from "@icons/InfoIcon";

import style from "./Blockquote.module.css";

type BlockquoteProps = {
  children: string;
  type: "info" | "warning";
};

const Blockquote = ({ children }: BlockquoteProps) => (
  <blockquote className={style.container}>
    <div className={style.icon}>
      <InfoIcon />
    </div>
    {children}
  </blockquote>
);

export default Blockquote;
