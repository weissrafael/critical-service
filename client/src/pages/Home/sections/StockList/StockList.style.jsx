import styled from "styled-components";
import {spacing, text} from "../../../../styles/styleGuide";

export const StocksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 500px;
`

export const ConnectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid black;
  padding: ${spacing.medium} 0;
`

export const Title = styled.span`
  font-size: ${text.paragraph};
`
