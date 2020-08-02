import styled from 'styled-components'
import {spacing, colors, text, fontWeights} from "../../styles/styleGuide";

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
  border-right: 1px solid ${colors.darkWhite};
  border-bottom: 1px solid ${colors.darkWhite};
  height: 32px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: ${spacing.xSmall} ${spacing.small};
`

export const PriceBox = styled(TableCell)`
  ${({ profit }) => `
      border-right: none;
     align-items: center;
     background-color: ${profit === 'negative' ?
                        colors.negative :
                        profit === 'positive' ?
                        colors.positive : colors.white};
     transition: background-color ${profit !== 'neutral' ? '0.3s' : '0.8s'}; ease-out;
  `}
`

export const Price = styled.span`
  ${({ profit }) => `
     align-items: center;
     color: ${profit === 'neutral' ? colors.byneOrange : colors.white};
     font-weight: ${fontWeights.bold};
     font-size: ${text.paragraph};
     transition: color ${profit !== 'neutral' ? '0.1s' : '0.8s'}; ease-out;
  `}
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
