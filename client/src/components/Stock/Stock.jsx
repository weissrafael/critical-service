import React from "react";
import {CompanyName, Price, PriceBox, StockContainer, StockNames, Ticker} from "./Stock.style";

export default function Stock ({ stock }) {
  const {symbol, companyName, basePrice, subscribed} = stock;
  const price = basePrice.toFixed(0);
  if(!subscribed) return null;
  return (
    <StockContainer>
      <CompanyName>
        {companyName}
      </CompanyName>
      <Ticker>
        {symbol}
      </Ticker>
      <PriceBox>
        <Price>
          {price}
        </Price>
      </PriceBox>
    </StockContainer>
  )
}

