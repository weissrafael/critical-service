import React from "react";
import useStocks from "../../../../hooks/useStocks";
import Stock from "../../../../components/Stock";
import {CompanyHeaderTitle, HeaderTitle, StocksContainer, StocksHeader} from "./StockList.style";

export default function StockList() {
  const { stocks, supportedStocks, subscribe, unsubscribe } = useStocks();
  return (
    <StocksContainer>
      <StocksHeader>
        <CompanyHeaderTitle>
          Company Name
        </CompanyHeaderTitle>
        <HeaderTitle>
          Stock Ticker
        </HeaderTitle>
        <HeaderTitle>
          Price
        </HeaderTitle>
      </StocksHeader>
      {supportedStocks.map((stock, key) => {
        if (key>2) unsubscribe([stock])
        return (
          <Stock
            key={stock}
            stock={stocks[stock]}
          />
        );
      })}
    </StocksContainer>
  );
}
