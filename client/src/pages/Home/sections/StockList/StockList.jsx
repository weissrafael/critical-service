import React from "react";
import useWebsocket from "../../../../hooks/useWebsocket";
import useStocks from "../../../../hooks/useStocks";

export default function StockList() {
  const { connected } = useWebsocket();
  const { stocks, supportedStocks, subscribe, unsubscribe } = useStocks();
  console.log("stonks", supportedStocks, stocks);

  return (
    <div>
      <div>{`Conection State: ${connected} `}</div>
      {supportedStocks.map((stock) => {
        return (
          <div key={stock}>
            <div
              onClick={() => {
                (stocks[stock].subscribed) ? unsubscribe([stock]): subscribe([stock]);
              }}
            >
              {stock} - {stocks[stock].companyName} US {stocks[stock].basePrice}{" "}
              | Sub: {stocks[stock].subscribed.toString()}
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}
