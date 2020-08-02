import React from "react";
import {CompanyName, StockRow, Ticker} from "./StockToFollow.style";
import CheckBox from "../Checkbox";
import useStocks from "../../hooks/useStocks";

export default function StockToFollow ({ stock, ticker }) {
  const {symbol, companyName, subscribed } = stock;
  const { unsubscribe, subscribe } = useStocks();

  const handleClick = () => {
    subscribed ? unsubscribe([ticker]): subscribe([ticker]);
  }

  return (
    <StockRow check={subscribed} onClick={handleClick}>
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

