import React from "react";

import { ParagraphStyle } from "./Paragraph.style";

const Paragraph = (props: any) => {
  return <ParagraphStyle>{props.children}</ParagraphStyle>;
};

export default Paragraph;
