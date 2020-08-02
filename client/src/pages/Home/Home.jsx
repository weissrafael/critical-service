import React, {useState} from "react";
import Header from "./sections/Header";
import StockCards from "./sections/StockCards";
import StockList from "./sections/StockList";
import {HomeBody, MainWrapper} from "./Home.style";

export default function Home() {
  const [viewMode, setViewMode] = useState('cards');

  const changeView = () => {
    setViewMode(viewMode === 'cards' ? 'list' : 'cards')
  }

  return (
    <MainWrapper>
      <Header viewMode={viewMode} changeView={changeView}/>
      <HomeBody>
        {viewMode === 'cards' ? (
          <StockCards/>
        ) : (
          <StockList/>
        )}
      </HomeBody>
    </MainWrapper>
  );
}
