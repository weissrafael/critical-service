import React, {useEffect} from "react";
import useStocks from "../../../../hooks/useStocks";
import Stock from "../../../../components/Stock";
import {
  CompanyHeaderTitle,
  HeaderPrice,
  HeaderTitle,
  StocksContainer,
  StocksHeader,
  WarningBanner, WarningBannerContent, StocksCardsContainer
} from "./StockList.style";

export default function StockList({viewMode}) {
  const { stocks, supportedStocks, noStocksSubscribed } = useStocks();

  if (noStocksSubscribed) {
    return (
      <WarningBanner>
        <WarningBannerContent>
          Click on settings menu to start following stocks in real time!
        </WarningBannerContent>
      </WarningBanner>
    )
  }

  if(viewMode === 'cards') {
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
      {supportedStocks.map(stock => {
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
