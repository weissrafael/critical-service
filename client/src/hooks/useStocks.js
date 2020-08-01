import { useSelector } from "react-redux";

export default function useStocks() {
  const { stocks, supportedStocks } = useSelector((store) => store.stocks);
  return { stocks, supportedStocks };
}
