import React from "react";
import {CompanyName, StockRow, Ticker} from "./StockToFollow.style";
import CheckBox from "../Checkbox";

export default function StockToFollow ({ stock }) {
  const {symbol, companyName, subscribed} = stock;

  return (
    <StockRow check={subscribed}>
      <CompanyName check={subscribed}>
        {companyName}
      </CompanyName>
      <Ticker check={subscribed}>
        {symbol}
      </Ticker>
      <CheckBox check={subscribed}/>
    </StockRow>
  )
}

