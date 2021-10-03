import ButtonIcon from "@components/ButtonIcon";
import CopyIcon from "@components/icons/CopyIcon";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";

const PreContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerStyle = styled.div`
  background-color: ${({ theme }) => theme.colors["black.2200"]};
  padding: 0rem 1rem 0 1rem;
  margin: 0 0 1rem 0;
  font-size: 1rem;
`;

const FilenameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 0.375rem 0.375rem 0 0;
  background-color: ${({ theme }) => theme.colors["black.2100"]};

  div {
    margin: auto 0;

    p {
      margin: 0;
    }
  }

  code {
    margin: 0;
    padding: 0 0 0 1rem;
    font-size: 1rem;
  }
`;

const Line = styled.div<{ isBash: boolean }>`
  ${({ isBash }) =>
    isBash &&
    css`
      ::before {
        content: "$ ";
      }
    `}
`;

const Prism = (props: any) => {
  const lines = props.children.props.children.split("\n");
  let filename = "";
  let code = "";

  if (lines[0].includes(">>>")) {
    filename = lines[0].replace(">>> ", "");
    lines.splice(0, 2);
  }

  lines.splice(-1);
  code = lines.join("\n");

  return (
    <PreContainer>
      {filename !== "" && (
        <FilenameHeader>
          <div>
            <p>
              <code>{filename}</code>
            </p>
          </div>
          <div>
            <ButtonIcon
              bgColor="black.2100"
              bgHoverColor="black.2000"
              bgActiveColor="black.1900"
              fgSvgColor="blue.1600"
              fgHoverSvgColor="blue.600"
              fgActiveSvgColor="blue.400"
            >
              <CopyIcon />
            </ButtonIcon>
          </div>
        </FilenameHeader>
      )}
      <ContainerStyle>
        <Highlight
          {...defaultProps}
          code={code}
          theme={{
            plain: {
              color: "#ffffff",
            },
            styles: [
              {
                types: ["keyword"],
                style: {
                  color: "#6E7D9A",
                },
              },
              {
                types: ["maybe-class-name"],
                style: {
                  color: "#44dfff",
                },
              },
              {
                types: ["string"],
                style: {
                  color: "#aaed36",
                },
              },
              {
                types: ["tag"],
                style: {
                  color: "#ff006a",
                  fontStyle: "italic",
                },
              },
              {
                types: ["comment", "punctuation"],
                style: {
                  color: "rgba(90, 105, 134)",
                  fontStyle: "italic",
                },
              },
              {
                types: ["constant", "builtin", "variable"],
                style: {
                  color: "rgb(110, 125, 154)",
                  fontStyle: "italic",
                },
              },
              {
                types: ["punctuation"],
                style: {
                  color: "white",
                },
              },
              {
                types: ["symbol", "inserted"],
                style: {
                  color: "rgb(255, 255, 255)",
                },
              },
              {
                types: ["operator"],
                style: {
                  fontStyle: "italic",
                },
              },
              {
                types: ["changed", "char", "attr-name"],
                style: {
                  color: "rgb(68, 223, 255)",
                },
              },
              {
                types: ["function", "deleted"],
                style: {
                  color: "rgb(255, 0, 106)",
                },
              },
              {
                types: ["number"],
                style: {
                  color: "#f5af19",
                },
              },
            ],
          }}
          language={props.children.props.className.replace("language-", "")}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line
                  isBash={line[0].content.startsWith("$")}
                  key={i}
                  {...getLineProps({
                    line,
                    key: i,
                  })}
                >
                  {line.map((token, key) => (
                    <span
                      key={i}
                      {...getTokenProps({
                        token: token.content.startsWith("$ ")
                          ? {
                              ...token,
                              content: token.content.replace("$ ", ""),
                            }
                          : token,
                        key,
                      })}
                    />
                  ))}
                </Line>
              ))}
            </pre>
          )}
        </Highlight>
      </ContainerStyle>
    </PreContainer>
  );
};

export default Prism;
