import React from "react";
import "./ExpensesItem.css";
import ExpensesDate from "../expensesDate/ExpensesDate";
import Button from "../../UI/button/Button";
import ConfirmModal from "../../UI/modal/ConfirmModal";

export const ExpensesItem = ({
  title,
  amount,
  id,
  date,
  showModalDelete,
  openModalHandler,
  closeModalHandler,
  deleteExpenseHandler,
}) => {
  return (
    <div className="expense-item">
      <div className="container-text_date">
        <ExpensesDate date={date} />
        <h2>{title}</h2>
      </div>
      <div className="expense-item_description">
        <div className="expense-item_price">${amount}</div>
        <Button onClick={() => openModalHandler(id)}>Delete</Button>

        <ConfirmModal isOpen={showModalDelete} onClose={closeModalHandler}>
          <h2>Вы точно хотите выйти?</h2>
          <Button onClick={deleteExpenseHandler}>Да </Button>
          <Button onClick={closeModalHandler}>Нет </Button>
        </ConfirmModal>
      </div>
    </div>
    
  );
};
