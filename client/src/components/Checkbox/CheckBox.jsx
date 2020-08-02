import React from "react";
import PropTypes from 'prop-types'
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

CheckBox.proptypes = {
  check: PropTypes.bool.isRequired,
  style: PropTypes.object,
  bgColor: PropTypes.string
}
