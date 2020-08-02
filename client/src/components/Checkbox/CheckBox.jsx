import React from "react";
import {CheckBoxStyle, CheckBoxWrapper, CheckIconStyle} from "./CheckBox.style";

export default function CheckBox ({ check, style, bgColor }) {
  return (
    <CheckBoxWrapper style={style}>
      <CheckBoxStyle check={check} bgColor={bgColor}>
        <CheckIconStyle check={check}/>
      </CheckBoxStyle>
    </CheckBoxWrapper>
  )
}

