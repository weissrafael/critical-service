import styled from "styled-components";
import {colors, layoutMaxWidth, spacing} from "../../../../styles/styleGuide";

export const StocksCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: ${layoutMaxWidth};
  margin-top: ${spacing.large};
`
