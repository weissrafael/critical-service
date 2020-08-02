import React, {useState} from "react";
import Header from "./sections/Header";
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
        <StockList viewMode={viewMode}/>
      </HomeBody>
    </MainWrapper>
  );
}
