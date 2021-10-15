import THEME from "@styles/theme";

const solarized = {
  'code[class*="language-"]': {
    color: `hsla(${THEME.colors["fg-100"]}, 0.65)`,
    background: "none",
    fontWeight: "500",
    fontFamily:
      "\"Iosevka\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: "left",
    whiteSpace: "pre-wrap",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: `hsla(${THEME.colors["fg-100"]}, 0.65)`,
    background: "none",
    fontWeight: "500",
    fontFamily:
      "\"Iosevka\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "pre-wrap",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1rem 0",
    margin: "0",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#2E3440",
    padding: ".1em",
    borderRadius: ".3em",
    whiteSpace: "normal",
  },
  comment: {
    color: `hsla(${THEME.colors["fg-100"]}, 0.2)`,
  },
  prolog: {
    color: `hsla(${THEME.colors["fg-100"]}, 0.3)`,
  },
  doctype: {
    color: `hsla(${THEME.colors["fg-100"]}, 0.3)`,
  },
  cdata: {
    color: `hsla(${THEME.colors["fg-100"]}, 0.3)`,
  },
  punctuation: {
    color: `hsla(${THEME.colors["violet-300"]}, 1)`,
  },
  ".namespace": {
    Opacity: ".7",
  },
  property: {
    color: `hsla(${THEME.colors["violet-300"]}, 1)`,
  },
  tag: {
    color: `hsla(${THEME.colors["violet-300"]}, 1)`,
  },
  number: {
    color: `hsla(${THEME.colors["emerald-300"]}, 1)`,
  },
  boolean: {
    color: `hsla(${THEME.colors["emerald-300"]}, 1)`,
  },
  selector: {
    color: "#A3BE8C",
  },
  "attr-name": {
    color: `hsla(${THEME.colors["emerald-300"]}, 1)`,
  },
  string: {
    color: `hsla(${THEME.colors["teal-300"]}, 1)`,
  },
  char: {
    color: `hsla(${THEME.colors["green-300"]}, 1)`,
  },
  operator: {
    color: `hsla(${THEME.colors["fg-100"]}, 0.7)`,
  },
  ".language-css .token.string": {
    color: `hsla(${THEME.colors["pink-300"]}, 0.7)`,
  },
  ".style .token.string": {
    color: `hsla(${THEME.colors["pink-300"]}, 0.7)`,
  },
  "attr-value": {
    color: "#88C0D0",
  },
  function: {
    color: `hsla(${THEME.colors["cyan-300"]}, 1)`,
    fontStyle: "italic",
  },
  "class-name": {
    color: `hsla(${THEME.colors["orange-300"]}, 1)`,
  },
  keyword: {
    color: `hsla(${THEME.colors["pink-300"]}, 1)`,
    fontStyle: "italic",
  },
  "plain-text": {
    color: `hsla(${THEME.colors["fg-100"]}, 0.7)`,
  },
  regex: {
    color: "#EBCB8B",
  },
  important: {
    color: "#EBCB8B",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

export default solarized;
