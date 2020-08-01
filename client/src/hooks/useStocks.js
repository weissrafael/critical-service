import { useSelector, useDispatch } from "react-redux";
import { subscribeStock } from "../store/reducers/stocks";

export default function useStocks() {
  const dispatch = useDispatch();
  const { stocks, supportedStocks } = useSelector((store) => store.stocks);

  function subscribe(stocksName) {
    dispatch(subscribeStock(stocksName));
  }
  return { stocks, supportedStocks, subscribe };
}
