import React, {useEffect, useState} from "react";
import {CompanyName, Price, PriceBox, StockContainer, StockNames, Ticker} from "./Stock.style";
import usePrevious from "../../hooks/usePrevious";


export default function Stock ({ stock }) {
  const {symbol, companyName, basePrice, subscribed} = stock;
  const [profitStatus, setProfitStatus] = useState('neutral');
  const [speedReducer, setSpeedReducer] = useState(0);
  const [frameRate, setFrameRate] = useState(12);
  const price = Math.trunc(basePrice);
  const [oldPrice, setOldPrice] = useState(price);
  // const previousPrice = usePrevious(price);

  useEffect(() => {
    if(speedReducer <= frameRate){
      setSpeedReducer(speedReducer + 1)
    }
    if(speedReducer > frameRate){
      setSpeedReducer(0)
      setProfitStatus(price >= oldPrice ? 'positive' : 'negative')
      setTimeout(()=>{
        setProfitStatus('neutral')
        setOldPrice(price)
        if(frameRate<40) setFrameRate(40)
        if(frameRate<70) setFrameRate(70)
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
          {oldPrice}
        </Price>
      </PriceBox>
    </StockContainer>
  )
}

