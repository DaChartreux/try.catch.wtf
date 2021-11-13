import React from "react";

import style from "./Paragraph.module.css";

const Paragraph = (props: any) => (
  <p className={style.paragraph}>{props.children}</p>
);

export default Paragraph;
