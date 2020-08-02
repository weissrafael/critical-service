import React from "react";
import useStocks from "../../hooks/useStocks";
import {SettingsContainer, SettingsHeader, CompanyHeaderTitle, HeaderTitle} from "./Settings.style";
import StockToFollow from "../StockToFollow";
import CheckBox from "../Checkbox";
import {spacing} from "../../styles/styleGuide";

export default function Settings () {
  const { stocks, supportedStocks, unsubscribe} = useStocks();

  return (
    <SettingsContainer>
      <SettingsHeader>
        <CompanyHeaderTitle>
          Company Name
        </CompanyHeaderTitle>
        <HeaderTitle>
          Ticker
        </HeaderTitle>
          <CheckBox style={{marginRight: spacing.medium}}/>
      </SettingsHeader>
      {supportedStocks.map((stock, key) => {
        unsubscribe([stock])
        return (
          <StockToFollow
            key={stock}
            ticker={stock}
            stock={stocks[stock]}
          />
        );
      })}
    </SettingsContainer>
  )
}

