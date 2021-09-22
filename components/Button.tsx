import React from "react";
import styled from "styled-components";

type ButtonStyledProps = {
  bgColor: string;
  hoverBgColor: string;
  activeBgColor: string;
  fgColor: string;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = styled.button<ButtonStyledProps>`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fgColor};
  transition: all 200ms ease-in-out;

  &:hover {
    background-color: ${(props) => props.hoverBgColor};
  }

  &:active {
    background-color: ${(props) => props.activeBgColor};
  }
`;

export default Button;
