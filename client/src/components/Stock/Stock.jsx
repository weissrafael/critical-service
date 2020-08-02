import React, {useEffect, useState} from "react";
// import usePrevious from "../../hooks/usePrevious";
import ListRow from "./ListRow";
import Card from "./Card";


export default function Stock ({ stock, viewMode }) {
  const {symbol, companyName, basePrice, subscribed} = stock;
  const [profitStatus, setProfitStatus] = useState('neutral');
  const price = Math.trunc(basePrice);

  // Only this would be necessary if the server send events in a larger time slot:
  // const previousPrice = usePrevious(price);
  // useEffect(() => {
  //   setProfitStatus(price >= previousPrice ? 'positive' : 'negative')
  //   setTimeout(()=>{
  //     setProfitStatus('neutral')
  //   }, 400)
  // }, [price]);

  // All logic below should be back-end business:
  const [speedReducer, setSpeedReducer] = useState(0);
  const [frameRate, setFrameRate] = useState(12);
  const [oldPrice, setOldPrice] = useState(price);

  useEffect(() => {
    if(speedReducer <= frameRate){
      setSpeedReducer(speedReducer + 1)
    }
    if(speedReducer > frameRate){
      setSpeedReducer(0)
      setProfitStatus(price >= oldPrice ? 'positive' : 'negative')
      setTimeout(()=>{
        setProfitStatus('neutral')
        setOldPrice(price)
        if(frameRate<60) setFrameRate(60)
      }, 400)
    }
  }, [price]);

  useEffect(() => {
    if (viewMode === 'cards') {
      setFrameRate(15)
    } else {
      setFrameRate(60)
    }
  }, [viewMode]);

  if(!subscribed) return null;

  if(viewMode === 'cards') {
    return <Card companyName={companyName} symbol={symbol} profitStatus={profitStatus} price={oldPrice}/>
  } else {
    return <ListRow companyName={companyName} symbol={symbol} profitStatus={profitStatus} price={oldPrice}/>
  }
}

