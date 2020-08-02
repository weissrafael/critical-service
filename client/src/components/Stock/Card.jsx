import React from "react";
import {
  CompanyName,
  Price,
  PriceBox,
  CardContainer,
  Ticker,
  ChartHeader,
  ChartContainer,
  CardBody,
  Cell
} from "./Stock.style";
import RealTimeChart from "../RealTimeChart";

export default function Card ({ companyName, symbol, profitStatus, price }) {
  return (
    <CardContainer>
      <ChartHeader>
        <CompanyName>
          <Cell>
            {companyName}
          </Cell>
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
      <CardBody>
        <ChartContainer>
          <RealTimeChart symbol={symbol} basePrice={price} companyName={companyName}/>
        </ChartContainer>
      </CardBody>
    </CardContainer>
  )
}
