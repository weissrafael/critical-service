import styled from 'styled-components'
import {colors, fontWeights, radius, spacing} from "../../styles/styleGuide";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 576px;
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

export const CompanyHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  margin-left: ${spacing.medium};
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
`

export const HeaderTitle = styled.div`
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 15%;
  font-weight: ${fontWeights.bold};
`
