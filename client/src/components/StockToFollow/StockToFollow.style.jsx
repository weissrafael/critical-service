import styled from 'styled-components'
import {spacing, colors, text, fontWeights} from "../../styles/styleGuide";

export const StockRow = styled.div`
  ${({ check }) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 412px;
    cursor: pointer;
    padding: ${spacing.small} ${spacing.medium};
    background-color: ${check ? colors.white : colors.lightGray};
    border-bottom: 1px solid ${check ? colors.byneBlue : colors.gray};
    transition: all 0.3s ease-in-out;
  `}
`

export const Ticker = styled.div`
  ${({ check }) => `
    font-size: ${text.paragraph};
    color: ${check ? colors.byneOrange : colors.gray};
    font-weight: ${fontWeights.bold};
    width: 15%;
    padding-left: ${spacing.medium};
    transition: all 0.3s ease-in-out;
  `}
`

export const CompanyName = styled.div`
  ${({ check }) => `
    font-size: ${text.paragraph};
    color: ${check ? colors.primaryText : colors.gray};
    width: 70%;
    transition: all 0.3s ease-in-out;
  `}
`
