import styled from 'styled-components'
import {spacing, colors, text, fontWeights} from "../../styles/styleGuide";

export const StockRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 412px;
  padding: ${spacing.small} ${spacing.medium};
  border-bottom: 1px solid ${colors.byneBlue};
`

export const Ticker = styled.div`
  font-size: ${text.byneOrange};
  color: ${colors.primaryText};
  font-weight: ${fontWeights.bold};
  width: 15%;
  padding-left: ${spacing.medium};
`



export const CompanyName = styled.div`
  font-size: ${text.paragraph};
  color: ${colors.byneBlue};
  width: 70%;
`
