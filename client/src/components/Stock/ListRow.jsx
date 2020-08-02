import React from "react";
import {CompanyName, Price, PriceBox, StockContainer, Ticker} from "./Stock.style";

export default function Stock ({ companyName, symbol, profitStatus, price }) {
  return (
    <StockContainer>
      <CompanyName>
        {companyName}
      </CompanyName>
      <Ticker>
        {symbol}
      </Ticker>
      <PriceBox profit={profitStatus}>
        <Price profit={profitStatus}>
          {price}
        </Price>
      </PriceBox>
    </StockContainer>
  )
}

