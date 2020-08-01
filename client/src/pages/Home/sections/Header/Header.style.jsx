import styled from 'styled-components'
import {fontWeights, text, spacing, colors, screens} from "../../../../styles/styleGuide";

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 64px;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGray};
`

export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 576px;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Logo = styled.img`
  width: auto;
  height: 64px;
`

export const Title = styled.span`
  font-size: 0;
  margin-left: 0;
  font-weight: ${fontWeights.bold};
  color: ${colors.primaryText};
  @media (min-width: ${screens.medium}) {
    margin-left: ${spacing.xLarge};
    font-size: ${text.h[5].size};
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
`
