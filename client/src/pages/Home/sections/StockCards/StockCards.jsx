import React from "react";
import useStocks from "../../../../hooks/useStocks";
import {StocksCardsContainer} from "./StockCards.style";
import Stock from "../../../../components/Stock";

export default function StockCards() {
  const { stocks, supportedStocks } = useStocks();

  return (
    <StocksCardsContainer>
      {supportedStocks.map(stock => {
        return (
          <Stock
            key={stock}
            stock={stocks[stock]}
            viewMode={'cards'}
          />
        );
      })}
    </StocksCardsContainer>
  );
}
