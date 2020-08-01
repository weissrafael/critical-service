import React from "react";
import useStocks from "../../hooks/useStocks";
import {SettingsContainer} from "./Settings.style";
import StockToFollow from "../StockToFollow";

export default function Settings () {
  const { stocks, supportedStocks} = useStocks();

  return (
    <SettingsContainer>
      {supportedStocks.map((stock) => {
        return (
          <StockToFollow
            key={stock}
            stock={stocks[stock]}
          />
        );
      })}
    </SettingsContainer>
  )
}

