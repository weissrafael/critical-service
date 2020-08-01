import React from "react";
import useWebsocket from "../../../../hooks/useWebsocket";
import useStocks from "../../../../hooks/useStocks";
import Stock from "../../../../components/Stock";

export default function StockList() {
  const { connected } = useWebsocket();
  const { stocks, supportedStocks, subscribe, unsubscribe } = useStocks();
  console.log("stonks", supportedStocks, stocks);

  return (
    <div>
      <div>{`Conection State: ${connected} `}</div>
      {supportedStocks.map((stock) => {
        return (
          <Stock
            key={stock}
            stock={stocks[stock]}
          />
        );
      })}
    </div>
  );
}
