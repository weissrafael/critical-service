import React from "react";
import {CompanyName, Price, PriceBox, CardContainer, Ticker, ChartHeader, ChartContainer} from "./Stock.style";
import RealTimeChart from "../RealTimeChart";

export default function Card ({ companyName, symbol, profitStatus, price }) {
  const stock = {companyName, symbol, basePrice: price};
  return (
    <CardContainer>
      <ChartHeader>
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
      </ChartHeader>
      <ChartContainer>
        <RealTimeChart stock={stock}/>
      </ChartContainer>
    </CardContainer>
  )
}
