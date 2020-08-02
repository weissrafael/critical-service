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
  font-size: 14px !important;
  transition: all 0.2s ease-in-out;
`

export const CheckBoxStyle = styled.div`
  ${({ check, bgColor }) => `
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${!check ? colors.gray : bgColor ? bgColor : colors.byneBlue};
    transition: all 0.2s ease-in-out;
    :first-child {
       color: ${check ? colors.white : colors.gray};
    }
  `}
`
