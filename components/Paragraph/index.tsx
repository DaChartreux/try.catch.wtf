import React from "react";

import { ParagraphStyle } from "./Paragraph.style";

const Paragraph = (props: any) => (
  <ParagraphStyle>{props.children}</ParagraphStyle>
);

export default Paragraph;
