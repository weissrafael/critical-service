import React, {useState} from "react";
import {ButtonsWrapper, Logo, LogoContainer, NavBar, Title} from "./Header.style";
import SettingsIcon from '@material-ui/icons/Settings';
// import logo from '../../../../assets/images/logo.png'
// import AnimatedModal from "../../../../components/AnimatedModal";

export default function ({ events }) {
  return (
    <NavBar>
      <LogoContainer>
        {/*<Logo src={logo}/>*/}
        <Title>Stocks Wallet</Title>
      </LogoContainer>
      <ButtonsWrapper>
        <SettingsIcon onClick={() => console.log('open stocks modal')}/>
      </ButtonsWrapper>
      {/*<AnimatedModal*/}
      {/*  closeModal={}*/}
      {/*  isOpen={}>*/}
      {/*  */}
      {/*</AnimatedModal>*/}
    </NavBar>
  );
}