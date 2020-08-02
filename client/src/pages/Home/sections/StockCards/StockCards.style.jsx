import styled from "styled-components";
import {colors, layoutMaxWidthForCards, spacing} from "../../../../styles/styleGuide";

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
