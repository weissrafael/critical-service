import styled from 'styled-components'
import {colors, spacing, text} from "../../styles/styleGuide";

export const ConnectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
`

export const ColoredCircle = styled.div`
  ${({ connected }) => `
    width: 16px;
    height: 16px;
    margin-left: ${spacing.medium};
    border-radius: 50%;
    background-color: ${connected ? colors.positive : colors.negative};
  `}
`

export const Label = styled.span`
  ${({ connected }) => `
    font-size: ${text.paragraph};
    color: ${connected ? colors.positive : colors.negative};
  `}
`
