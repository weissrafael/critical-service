import React, {useState} from "react";
import {ButtonsWrapper, Logo, LogoContainer, NavBar, NavBarContainer, SettingsIconStyled, Title} from "./Header.style";
import ConnectionStatus from "../../../../components/ConnectionStatus/ConnectionStatus";
import useWebsocket from "../../../../hooks/useWebsocket";
import logo from '../../../../assets/images/logo.png'
import AnimatedModal from "../../../../components/AnimatedModal";
import Settings from "../../../../components/Settings";

export default function () {
  const { connected } = useWebsocket();
  const [settingsIsOpen, setSettingsIsOpen] = useState(false);

  return (
    <NavBar>
      <NavBarContainer>
        <Logo src={logo}/>
        <ConnectionStatus connected={connected}/>
        <ButtonsWrapper>
          <SettingsIconStyled onClick={() => setSettingsIsOpen(true)}/>
        </ButtonsWrapper>
      </NavBarContainer>
      <AnimatedModal
        closeModal={() => setSettingsIsOpen(false)}
        isOpen={settingsIsOpen}>
        {settingsIsOpen && <Settings/>}
      </AnimatedModal>
    </NavBar>
  );
}
