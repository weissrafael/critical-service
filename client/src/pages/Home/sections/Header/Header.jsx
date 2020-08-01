import React, {useState} from "react";
import {ButtonsWrapper, Logo, LogoContainer, NavBar, NavBarContainer, Title} from "./Header.style";
import SettingsIcon from '@material-ui/icons/Settings';
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
          <SettingsIcon onClick={() => setSettingsIsOpen(true)}/>
        </ButtonsWrapper>
      </NavBarContainer>
      <AnimatedModal
        closeModal={() => setSettingsIsOpen(false)}
        isOpen={settingsIsOpen}>
        <Settings/>
      </AnimatedModal>
    </NavBar>
  );
}
