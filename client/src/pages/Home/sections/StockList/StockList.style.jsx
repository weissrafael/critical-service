import styled from "styled-components";
import {colors, spacing, text} from "../../../../styles/styleGuide";

export const StocksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 576px;
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
  
  border-right: 1px solid ${colors.byneGray};
  border-bottom: 1px solid ${colors.byneGray};
  padding: ${spacing.xSmall} ${spacing.small};
`

export const CompanyHeaderTitle = styled(HeaderTitle)`
  flex: 2;
`
