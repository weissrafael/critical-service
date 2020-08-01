import styled from 'styled-components'
import {colors, radius} from "../../styles/styleGuide";

export const Container = styled.div`
  ${({ isOpen }) => `
    position: fixed;
    width: 100%;
    height: 100%;
    transition-delay: ${isOpen ? '0' : '0.8s'};
    z-index: ${isOpen ? 5 : -1};
    top: 0;
  `}
`

export const Background = styled.div`
  ${({ isOpen }) => `
    width: 100%;
    height: 100%;
    background-color: ${colors.modalBackground};
    opacity: ${isOpen ? 1 : 0};
    transition: opacity 0.4s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const Modal = styled.div`
  ${({ isOpen }) => `
    background-color: ${colors.white};
    border-radius: ${radius};
    position: relative;
    transition: top 0.4s ease-in-out;
    top: ${isOpen ? '0' : '-100vh'};
  `}
`
