import React from "react";
import { PrismAsyncLight as Prism } from "react-syntax-highlighter";

import {
  FilenameHeader,
  ContainerStyle,
} from "@components/Highlight/Hightlight.style";
import solarized from "@components/Highlight/solarized";
import CodesandboxIcon from "@components/icons/CodesandboxIcon";
import ButtonIcon from "@components/ButtonIcon";
import CopyIcon from "@components/icons/CopyIcon";
import useCopyToClipboard from "@hooks/useCopyToClipboard";

import type { ContainerStyleVars } from "@components/Highlight/Hightlight.style";

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
  const { copy } = useCopyToClipboard();

  const ADDED = JSON.parse(added ?? "[]");
  const REMOVED = JSON.parse(removed ?? "[]");

  const containerStyle: ContainerStyleVars = {
    "--border-radius": fileName ? "0 0 0.375rem 0.375rem" : "0.375rem",
  };

  return (
    <>
      {!!fileName && <FilenameHeader>{fileName}</FilenameHeader>}
      <ContainerStyle style={containerStyle as any}>
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
    </>
  );
};

Highlight.defaultProps = {
  cbSlug: "",
};

export default Highlight;
