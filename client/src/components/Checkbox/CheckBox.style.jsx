import styled from 'styled-components'
import {colors} from "../../styles/styleGuide";
import CheckIcon from "@material-ui/icons/Check";

export const CheckBoxWrapper = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const CheckIconStyle = styled(CheckIcon)`
  ${({ check }) => `
    font-size: 14px !important;
    color: ${check ? colors.white : colors.gray};
  `}  
`

export const CheckBoxStyle = styled.div`
  ${({ check }) => `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${check ? colors.byneBlue : colors.gray};
  `}
`
