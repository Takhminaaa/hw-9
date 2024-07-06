import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ConfirmModal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;
  return createPortal(
    <StyledModalContainer onClick={onClose}>
      <WrapperContent onClick={(e) => e.stopPropagation()}>
        {children}
      </WrapperContent>
    </StyledModalContainer>,
    document.getElementById("modal")
  );
};

export default ConfirmModal;

const StyledModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #666666a6;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;
const WrapperContent = styled.div`
  padding: 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 14px;
`;

// const StyledContainerBtn = styled.div`
//   display: flex;
//   justify-content: space-evenly;
// `;
