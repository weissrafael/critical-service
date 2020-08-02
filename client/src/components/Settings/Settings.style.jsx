import styled from 'styled-components'
import {colors, radius, spacing} from "../../styles/styleGuide";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 576px;
  border-radius: ${radius};
  background-color: ${colors.white};
`

export const SettingsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: ${spacing.small} 0;
`

export const CompanyHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  margin-left: ${spacing.medium};
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 15%;
`
