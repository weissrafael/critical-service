import React, {useState} from "react";
import Header from "./sections/Header";
import StockCards from "./sections/StockCards";
import StockList from "./sections/StockList";
import { MainWrapper } from "./Home.style";

export default function Home() {
  const [chartInstance, setChartInstance] = useState('cards');

  const changeView = () => {
    setChartInstance(chartInstance === 'cards' ? 'list' : 'cards')
  }

  return (
    <MainWrapper>
      <Header changeView={changeView}/>
      {chartInstance === 'cards' ? (
        <StockCards/>
      ) : (
        <StockList/>
      )}
    </MainWrapper>
  );
}
