import React from "react";
import { PrismAsyncLight as Prism } from "react-syntax-highlighter";

import {
  PreContainer,
  FilenameHeader,
  ContainerStyle,
} from "@components/Highlight/Hightlight.style";
import solarized from "@components/Highlight/solarized";
import CodesandboxIcon from "@components/icons/CodesandboxIcon";
import ButtonIcon from "@components/ButtonIcon";
import CopyIcon from "@components/icons/CopyIcon";
import useCopyToClipboard from "@hooks/useCopyToClipboard";

type HighlightProps = {
  fileName: string;
  added: string;
  removed: string;
  children: string;
  className: string;
  cbSlug?: string;
};

const Highlight = ({
  fileName,
  added,
  removed,
  cbSlug,
  children,
  className,
}: HighlightProps) => {
  const [value, copy] = useCopyToClipboard();

  const ADDED = JSON.parse(added ?? "[]");
  const REMOVED = JSON.parse(removed ?? "[]");

  return (
    <PreContainer>
      <div className="icon">
        <ButtonIcon
          bgColor="bg-100"
          fgColor="fg-100"
          onClick={() => copy(children)}
        >
          <CopyIcon />
        </ButtonIcon>
        {cbSlug && (
          <ButtonIcon
            as="a"
            bgColor="bg-100"
            fgColor="fg-100"
            href={`https://codesandbox.io/s/${cbSlug}`}
            target="_blank"
            rel="noreferrer"
          >
            <CodesandboxIcon />
          </ButtonIcon>
        )}
      </div>
      {!!fileName && <FilenameHeader>{fileName}</FilenameHeader>}
      <ContainerStyle hasFilename={!!fileName}>
        <Prism
          language={className.replace("language-", "")}
          style={solarized}
          wrapLines
          lineNumberStyle={{ minWidth: "3rem" }}
          customStyle={{ overflowX: "scroll" }}
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
          {children.split("\n").slice(0, -1).join("\n")}
        </Prism>
      </ContainerStyle>
    </PreContainer>
  );
};

Highlight.defaultProps = {
  cbSlug: "",
};

export default Highlight;
