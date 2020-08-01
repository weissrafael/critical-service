import { useSelector, useDispatch } from "react-redux";
import { subscribeStock, unsubscribeStock } from "../store/reducers/stocks";

export default function useStocks() {
  const dispatch = useDispatch();
  const { stocks, supportedStocks } = useSelector((store) => store.stocks);

  function subscribe(stocksName) {
    dispatch(subscribeStock(stocksName));
  }

  function unsubscribe(stocksName) {
    dispatch(unsubscribeStock(stocksName));
  }

  return { stocks, supportedStocks, subscribe, unsubscribe };
}
