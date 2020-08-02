import styled from 'styled-components'
import {spacing, colors, text, fontWeights, shadows, screens} from "../../styles/styleGuide";

export const StockContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${spacing.large};
  margin-left: 0;
  box-shadow: none;
  border-top: 1px solid ${colors.darkWhite};
  border-bottom: 1px solid ${colors.darkWhite};
  @media (min-width: ${screens.medium}) {
     width: 47%;
     margin-bottom: ${spacing.medium};
     margin-left: ${spacing.medium};
     box-shadow: ${shadows.shadowDown4};
     border: 1px solid ${colors.darkWhite};
  }
`

export const ChartHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const ChartContainer = styled.div`
  height: 100%;
  width: 100%;
`
export const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${spacing.medium} ${spacing.medium} 2px ${spacing.small};
`

export const TableCell = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-right: 1px solid ${colors.darkWhite};
  border-bottom: 1px solid ${colors.darkWhite};
  height: 32px;
  white-space: nowrap;
  overflow: hidden;
  padding: ${spacing.xSmall} ${spacing.small};
`

export const Cell = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  justify-content: flex-start;
  flex: 2;
`
