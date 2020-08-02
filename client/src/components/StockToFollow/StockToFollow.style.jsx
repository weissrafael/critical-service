import styled from 'styled-components'
import {spacing, colors, text, fontWeights, screens} from "../../styles/styleGuide";

export const StockRow = styled.div`
  ${({ check }) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    padding: ${spacing.small} ${spacing.medium};
    background-color: ${check ? colors.darkWhite : colors.lightGray};
    border-bottom: 1px solid ${check ? colors.byneBlue : colors.gray};
    transition: all 0.2s ease-in-out;
    width: 311px;
    @media (min-width: ${screens.medium}) {
      width: 412px;
    }
  `}
`

export const Ticker = styled.div`
  ${({ check }) => `
    font-size: ${text.paragraph};
    color: ${check ? colors.byneOrange : colors.gray};
    font-weight: ${fontWeights.bold};
    width: 15%;
    padding-left: ${spacing.medium};
    transition: all 0.2s ease-in-out;
  `}
`

export const CompanyName = styled.div`
  ${({ check }) => `
    font-size: ${text.paragraph};
    color: ${check ? colors.primaryText : colors.gray};
    width: 70%;
    transition: all 0.2s ease-in-out;
  `}
`
