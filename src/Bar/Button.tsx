import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 50px;
  height: 30px;
  margin-right: 5px;
  border: 0.9px solid #908f8f;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;

  &:hover {
    background-color: #cfcfcf;
  }

  img {
    padding-top: 3px;
    height: 20px;
  }
`;

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

export default Button;
