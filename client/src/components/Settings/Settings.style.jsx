import styled from 'styled-components'
import {colors, spacing} from "../../styles/styleGuide";

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 576px;
  background-color: ${colors.white};
`

export const SettingsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  width: 100%;
  padding: ${spacing.small} ${spacing.medium};
`

export const CompanyHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
`

export const HeaderTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 15%;
`
