import styled from 'styled-components'
import {screens, spacing, colors, text} from "../../styles/styleGuide";

export const StockContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const StockNames = styled.div`
  display: flex;
  flex-direction: column;
`

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Price = styled.span`
  font-size: ${text.paragraph};
  color: ${colors.primaryText};
`

export const Ticker = styled.span`
  font-size: ${text.paragraph};
  color: ${colors.primaryText};
`


export const CompanyName = styled.span`
  font-size: ${text.bodySmall};
  color: ${colors.gray};
`
