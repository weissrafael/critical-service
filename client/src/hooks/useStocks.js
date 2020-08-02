import { useSelector, useDispatch } from "react-redux";
import { subscribeStock, unsubscribeStock } from "../store/reducers/stocks";
import {useEffect} from "react";

export default function useStocks() {
  const dispatch = useDispatch();
  const { stocks, supportedStocks } = useSelector((store) => store.stocks);
  const unsubscribedStocks = supportedStocks.filter(stock => {
    return !stocks[stock].subscribed;
  });
  const noStocksSubscribed = unsubscribedStocks.length > 0;

  function subscribe(stocksName) {
    dispatch(subscribeStock(stocksName));
  }

  function unsubscribe(stocksName) {
    dispatch(unsubscribeStock(stocksName));
  }

  return { stocks, supportedStocks, subscribe, unsubscribe, noStocksSubscribed };
}
