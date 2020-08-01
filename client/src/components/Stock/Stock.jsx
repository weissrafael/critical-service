import React, {useEffect, useState} from "react";
import {CompanyName, Price, PriceBox, StockContainer, StockNames, Ticker} from "./Stock.style";
import usePrevious from "../../hooks/usePrevious";

export default function Stock ({ stock }) {
  const [profitStatus, setProfitStatus] = useState('neutral');
  const {symbol, companyName, basePrice, subscribed} = stock;
  const price = Math.trunc(basePrice);
  const previousPrice = usePrevious(price);

  useEffect(() => {
    if(price && previousPrice) {
      setProfitStatus(price >= previousPrice ? 'positive' : 'negative')
      setTimeout(()=>{
        setProfitStatus('neutral')
      }, 400)
    }
  }, [price]);

  if(!subscribed) return null;

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

