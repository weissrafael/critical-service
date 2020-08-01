import styled from 'styled-components'
import {text, spacing, colors, radius, button, transitions, screens} from "./styleGuide";

export const ButtonText = styled.span`
  font-size: ${text.paragraph};
  margin-right: ${spacing.small};
  color: ${colors.primaryText};
`

export const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: ${radius};
  border: 1px solid transparent;
  height: ${button.small};
  width: auto;
  padding: 0;
  justify-content: center;
  cursor: pointer;
  transition: ${transitions.buttonBackground};
  &:hover {
    background-color: ${colors.darkWhite};
  }
  @media (min-width: ${screens.medium}) {
    border: 1px solid ${colors.gray};
    padding: 0 ${spacing.medium};
  }
`
