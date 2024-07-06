import React from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";
import ConfirmModal from "../UI/modal/ConfirmModal";

const Header = ({
  isLogin,
  onLogout,
  onUsers,
  onShowModal,
  showModal,
  closeModal,
}) => {
  return (
    <StyledHeader>
      <h2>Expense Tracker</h2>

      {isLogin && (
        <ContainerButton>
          <Button>Expense</Button>
          <Button onClick={onUsers}>Users</Button>
          <Button onClick={onShowModal}>Logaut</Button>

          {showModal && (
            <ConfirmModal isOpen={showModal} onClose={closeModal}>
              <h2>Вы точно хотите выйти?</h2>
              <Button onClick={onLogout}>Да </Button>
              <Button onClick={closeModal}>Нет </Button>
            </ConfirmModal>
          )}
        </ContainerButton>
      )}
    </StyledHeader>
  );
};

export default Header;
const ContainerButton = styled("div")`
  display: flex;
  justify-content: center;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background: #ad9be9;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 40px;
  align-items: center;

  h2 {
    font-size: 22px;
    font-weight: bold;
    color: white;
  }
`;
