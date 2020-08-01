import React from "react";
import {CheckBoxStyle, CheckBoxWrapper, CheckIconStyle} from "./CheckBox.style";

export default function CheckBox ({ check }) {
  return (
    <CheckBoxWrapper>
      <CheckBoxStyle check={check}>
        <CheckIconStyle check={check}/>
      </CheckBoxStyle>
    </CheckBoxWrapper>
  )
}

