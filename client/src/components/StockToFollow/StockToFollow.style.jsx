import styled from 'styled-components'
import {spacing, colors, text} from "../../styles/styleGuide";

export const StockContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const StockNames = styled.div`
  display: flex;
  flex-direction: column;
`

export const TableCell = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid ${colors.lightGray};
  border-bottom: 1px solid ${colors.lightGray};
  height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${spacing.xSmall} ${spacing.small};
`

export const PriceBox = styled(TableCell)`
  ${({ profit }) => `
     align-items: center;
     background-color: ${profit === 'negative' ? 
                        colors.white : 
                        profit === 'positive' ? 
                        colors.white : colors.white};
     transition: background-color 0.3s ease-out;
  `}
`

export const Price = styled.span`
  font-size: ${text.paragraph};
  color: ${colors.primaryText};
`

export const Ticker = styled(TableCell)`
  font-size: ${text.paragraph};
  color: ${colors.primaryText};
`


export const CompanyName = styled(TableCell)`
  font-size: ${text.paragraph};
  color: ${colors.primaryText};
  flex: 2;
`