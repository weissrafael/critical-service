import React from "react";
import {CompanyName, StockRow, Ticker} from "./StockToFollow.style";
import CheckBox from "../Checkbox";

export default function StockToFollow ({ stock }) {
  const {symbol, companyName, subscribed} = stock;

  return (
    <StockRow>
      <CompanyName>
        {companyName}
      </CompanyName>
      <Ticker>
        {symbol}
      </Ticker>
      <CheckBox/>
    </StockRow>
  )
}

