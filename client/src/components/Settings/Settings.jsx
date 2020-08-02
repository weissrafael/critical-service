import React, {useEffect, useState} from "react";
import useStocks from "../../hooks/useStocks";
import {SettingsContainer, SettingsHeader, CompanyHeaderTitle, HeaderTitle} from "./Settings.style";
import StockToFollow from "../StockToFollow";
import CheckBox from "../Checkbox";
import {spacing} from "../../styles/styleGuide";

export default function Settings () {
  const [allChecked, setAllChecked] = useState(false);
  const { stocks, supportedStocks, unsubscribe, subscribe} = useStocks();
  const unsubscribedStocks = supportedStocks.filter(stock => {
    return !stocks[stock].subscribed;
  });

  useEffect(() => {
    setAllChecked(unsubscribedStocks.length === 0);
  }, [unsubscribedStocks]);

  return (
    <SettingsContainer>
      <SettingsHeader onClick={()=> allChecked ? unsubscribe(supportedStocks) : subscribe(supportedStocks)}>
        <CompanyHeaderTitle>
          Company Name
        </CompanyHeaderTitle>
        <HeaderTitle>
          Ticker
        </HeaderTitle>
          <CheckBox style={{marginRight: spacing.medium}} check={allChecked}/>
      </SettingsHeader>
      {supportedStocks.map(stock => {
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

