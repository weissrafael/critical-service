import styled from "styled-components";
import {
  colors,
  fontWeights,
  layoutMaxWidth,
  layoutMaxWidthForCards,
  radius,
  screens,
  spacing,
  text
} from "../../../../styles/styleGuide";

export const StocksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: ${layoutMaxWidth};
  margin-top: ${spacing.large};
`

export const WarningBanner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: ${spacing.medium};
  @media (min-width: ${screens.medium}) {
    padding: ${spacing.large};
  }
`

export const WarningBannerContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${layoutMaxWidth};
  background-color: ${colors.byneGray};
  color: ${colors.white};
  font-weight: ${fontWeights.bold};
  padding: ${spacing.small};
  border-radius: ${radius};
  @media (min-width: ${screens.medium}) {
    padding: ${spacing.medium};
  }
`


export const StocksCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  max-width: ${layoutMaxWidthForCards};
  margin-top: ${spacing.large};
`


export const StocksHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const HeaderTitle = styled.span`
  font-size: ${text.paragraph};
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  
  border-right: 1px solid ${colors.darkWhite};
  border-bottom: 1px solid ${colors.darkWhite};
  padding: ${spacing.xSmall} ${spacing.small};
`

export const CompanyHeaderTitle = styled(HeaderTitle)`
  flex: 2;
`

export const HeaderPrice = styled(HeaderTitle)`
  border-right: none;
`
