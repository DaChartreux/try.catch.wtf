import React from "react";
import { Prism } from "react-syntax-highlighter";

import {
  PreContainer,
  FilenameHeader,
  ContainerStyle,
} from "@components/Highlight/Hightlight.style";
import solarized from "@components/Highlight/solarized";

type HighlightProps = {
  fileName: string;
  children: any;
  added: string;
  removed: string;
};

const Highlight = ({ fileName, added, removed, children }: HighlightProps) => {
  const ADDED = JSON.parse(added ?? "[]");
  const REMOVED = JSON.parse(removed ?? "[]");

  return (
    <PreContainer>
      {!!fileName && <FilenameHeader>{fileName}</FilenameHeader> }
      <ContainerStyle hasFilename={!!fileName}>
        <Prism
          language="tsx"
          style={solarized}
          showLineNumbers
          showInlineLineNumbers
          lineNumberStyle={{ minWidth: "3rem" }}
          lineProps={(lineNumber) => {
            let style: any = { display: "block" };
            if (ADDED.includes(lineNumber)) {
              style.backgroundColor = "#dbffdb22";
            } else if (REMOVED.includes(lineNumber)) {
              style.backgroundColor = "#ffecec22";
            }

            return { style };
          }}
        >
          {children}
        </Prism>
      </ContainerStyle>
    </PreContainer>
  );
};

export default Highlight;
