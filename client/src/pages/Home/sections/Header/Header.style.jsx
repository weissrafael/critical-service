import styled from 'styled-components'
import {fontWeights, text, spacing, colors, screens, layoutMaxWidth} from "../../../../styles/styleGuide";
import SettingsIcon from '@material-ui/icons/Settings';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import ViewListIcon from '@material-ui/icons/ViewList';

export const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 64px;
  align-items: center;
  border-bottom: 1px solid ${colors.byneGray};
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
  left: 0;
  @media (min-width: ${screens.medium}) {
    left: -11px;
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
  &:hover {
    color: ${colors.byneOrange};  
  }
  @media (min-width: ${screens.medium}) {
    margin-right: 0;
  }
`

export const SettingsIconStyled = styled(SettingsIcon)`
  ${IconStyles}
`

export const ViewModuleIconStyled = styled(ViewModuleIcon)`
  ${IconStyles}
`

export const ViewListIconStyled = styled(ViewListIcon)`
  ${IconStyles}
`

