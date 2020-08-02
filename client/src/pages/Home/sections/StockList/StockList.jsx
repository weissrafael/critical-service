import React from "react";
import useStocks from "../../../../hooks/useStocks";
import Stock from "../../../../components/Stock";
import {CompanyHeaderTitle, HeaderPrice, HeaderTitle, StocksContainer, StocksHeader} from "./StockList.style";
import RealTimeChart from "../../../../components/RealTimeChart";

export default function StockList() {
  const { stocks, supportedStocks } = useStocks();

  return (
    <StocksContainer>
      <StocksHeader>
        <CompanyHeaderTitle>
          Company Name
        </CompanyHeaderTitle>
        <HeaderTitle>
          Ticker
        </HeaderTitle>
        <HeaderPrice>
          Price
        </HeaderPrice>
      </StocksHeader>
      {/*{supportedStocks.map(stock => {*/}
      {/*  return (*/}
      {/*    <Stock*/}
      {/*      key={stock}*/}
      {/*      stock={stocks[stock]}*/}
      {/*    />*/}
      {/*  );*/}
      {/*})}*/}
      {supportedStocks.map((stock, key) => {
        if(key !== 0) return null;
        return (
          <RealTimeChart
            key={stock}
            stock={stocks[stock]}
          />
        );
      })}
    </StocksContainer>
  );
}
