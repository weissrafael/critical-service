import React from "react";
import Header from "./sections/Header";
import StockList from "./sections/StockList";
import { MainWrapper } from "./Home.style";

export default function Home() {
  return (
    <MainWrapper>
      <Header/>
      <StockList/>
    </MainWrapper>
  );
}
