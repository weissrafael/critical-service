import React from "react";
import {CompanyName, StockContainer, Ticker} from "./StockToFollow.style";

export default function StockToFollow ({ stock }) {
  const {symbol, companyName, subscribed} = stock;

  if(!subscribed) return null;

  return (
    <StockContainer>
      <CompanyName>
        {companyName}
      </CompanyName>
      <Ticker>
        {symbol}
      </Ticker>

    </StockContainer>
  )
}

