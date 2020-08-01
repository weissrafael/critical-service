import React from "react";
import {ConnectionWrapper, Label, ColoredCircle} from "./ConnectionStatus.style";

export default function ConnectionStatus ({ connected }) {

  return (
    <ConnectionWrapper>
      <Label connected={connected}>
        {connected ? 'Online' : 'Offline'}
      </Label>
      <ColoredCircle connected={connected}/>
    </ConnectionWrapper>
  )
}

