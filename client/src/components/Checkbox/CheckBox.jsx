import React from "react";
import {CheckBoxStyle, CheckBoxWrapper, CheckIconStyle} from "./CheckBox.style";

export default function CheckBox ({ check, style }) {
  return (
    <CheckBoxWrapper style={style}>
      <CheckBoxStyle check={check}>
        <CheckIconStyle check={check}/>
      </CheckBoxStyle>
    </CheckBoxWrapper>
  )
}

