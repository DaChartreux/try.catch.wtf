import styled from "styled-components";

type ButtonIconStyledProps = {
  bgColor: string;
  bgHoverColor: string;
  bgActiveColor: string;
  fgColor: string;
  fgSvgColor: string;
  fgHoverSvgColor: string;
  fgActiveSvgColor: string;
};

const ButtonIcon = styled.button<ButtonIconStyledProps>`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fgColor};
  transition: all 200ms ease-in-out;
  outline: none;

  & {
    svg {
      color: ${({ fgSvgColor }) => fgSvgColor};
    }
  }

  &:hover {
    svg {
      color: ${({ fgHoverSvgColor }) => fgHoverSvgColor};
    }
  }

  &:active {
    svg {
      color: ${({ fgActiveSvgColor }) => fgActiveSvgColor};
    }
  }
`;

export default ButtonIcon;
