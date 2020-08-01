import { useSelector } from "react-redux";

export default function useStocks() {
  const { stocks } = useSelector((store) => store.stocks);
  return { stocks };
}
