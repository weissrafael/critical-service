import styled from 'styled-components'
import {fontWeights, text, spacing, colors, screens, layoutMaxWidth, shadows} from "../../../../styles/styleGuide";
import SettingsIcon from '@material-ui/icons/Settings';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 64px;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: ${colors.white};
  box-shadow: ${shadows.shadowDown4};
`

export const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: ${layoutMaxWidth};
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
  position: relative;
  margin-right: 0;
  left: 0;
  @media (min-width: ${screens.medium}) {
    left: -11px;
    margin-right: ${spacing.small};
  }
`

export const Title = styled.span`
  font-size: 0;
  margin-left: 0;
  font-weight: ${fontWeights.bold};
  color: ${colors.primaryText};
  @media (min-width: ${screens.medium}) {
    font-size: ${text.h[5].size};
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
`

const IconStyles = `
  margin-right: ${spacing.medium};
  cursor: pointer;
  color: ${colors.byneGray};
  margin-left: ${spacing.medium};
  font-size: 32px !important;
  &:hover {
    color: ${colors.byneOrange};  
  }
  @media (min-width: ${screens.medium}) {
    margin-right: 0;
    margin-left: ${spacing.large};
  }
`

export const SettingsIconStyled = styled(SettingsIcon)`
  ${IconStyles}
`

export const ViewModuleIconStyled = styled(ViewModuleIcon)`
  ${IconStyles}
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
  
`

export const ViewListIconStyled = styled(ViewListIcon)`
  ${IconStyles}
`

