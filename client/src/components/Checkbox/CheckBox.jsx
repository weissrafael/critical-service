import React from "react";
import {CheckBoxStyle, CheckBoxWrapper} from "./CheckBox.style";
import CheckIcon from "@material-ui/icons/Check";

export default function CheckBox ({ check }) {
  return (
    <CheckBoxWrapper>
      <CheckBoxStyle>
        <CheckIcon style={{ fontSize: 16 }}/>
      </CheckBoxStyle>
    </CheckBoxWrapper>
  )
}

