import styled from 'styled-components'
import {colors, fontWeights, layoutMaxWidth, radius, screens, spacing} from "../../styles/styleGuide";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${layoutMaxWidth};
  border-radius: ${radius};
  overflow: hidden;
  background-color: ${colors.white};
`

export const SettingsHeader = styled.div`
  ${({ check }) => `
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    cursor: pointer;
    background-color: ${check ? colors.byneBlue : colors.byneGray};
    padding: ${spacing.small} 0;
  `}
`

export const SettingsBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 512px;
  overflow-y: scroll;
  @media (min-width: ${screens.medium}) {
     height: auto;
     overflow-y: hidden;
  }
  
`

export const CompanyHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  margin-left: ${spacing.medium};
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const HeaderTitle = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 15%;
  font-weight: ${fontWeights.bold};
`
