import React from "react";
import styled from "styled-components";

const CheckBoxStyles = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & > span {
    min-width: 110px;
  }

  & input:checked ~ div .checkmark:after {
    display: block !important;
  }

  & > div {
    position: relative;
    height: 25px;
    width: 25px;

    /* Create a custom checkbox */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      border-radius: 4px;
      border: 1px solid #0880ae;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    & .checkmark:after {
      left: 8px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: solid #0880ae;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
`;

function CheckBox(props) {
  return (
    <CheckBoxStyles>
      <span>{props.title}</span>
      <input type="checkbox" {...props} />
      <div>
        <span className="checkmark"></span>
      </div>
    </CheckBoxStyles>
  );
}

export default CheckBox;
