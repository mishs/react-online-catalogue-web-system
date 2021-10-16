import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  background: #fbfbfb;
  border: 1px solid #2c2738;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001),
    0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  width: 140px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2C2738;
  cursor: pointer;
`;

function Button(props) {
  return <ButtonStyles className="font-xs font-500" {...props}>{props.children}</ButtonStyles>;
}

export default Button;
