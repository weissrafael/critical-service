import React from "react";
import logo from "./logo.svg";
import "./App.css";
import useWebsocket from "./hooks/useWebsocket";
import useStocks from "./hooks/useStocks";

function App() {
  const { connected } = useWebsocket();
  const { stocks, supportedStocks, subscribe } = useStocks();
  console.log("stonks", supportedStocks, stocks);

  return (
    <div className="App">
      <div>{`Conection State: ${connected} `}</div>
      {supportedStocks.map((stock) => {
        return (
          <div key={stock}>
            <div
              onClick={() => {
                subscribe([stock]);
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

export default App;
