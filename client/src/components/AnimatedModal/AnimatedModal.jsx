import React, {useRef} from "react";
import {Background, Container, Modal} from "./AnimatedModal.style";
import useClickOutside from "../../hooks/useClickOutside";

export default function AnimatedModal({isOpen, closeModal, children}) {
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, closeModal);

  return (
    <Container isOpen={isOpen}>
      <Background isOpen={isOpen}>
        <Modal ref={wrapperRef} isOpen={isOpen}>
          {children}
        </Modal>
      </Background>
    </Container>
  );
}
