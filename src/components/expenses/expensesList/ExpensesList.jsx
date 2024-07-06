import React from "react";
import { ExpensesItem } from "../expensesItem/ExpensesItem";

export const ExpensesList = ({
  expenses,
  showModalDelete,
  openModalHandler,
  closeModalHandler,
  deleteExpenseHandler,
}) => {
  return (
    <div>
      {expenses?.map((item) => (
        <ExpensesItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          id={item.id}
          key={item.id}
          showModalDelete={showModalDelete}
          openModalHandler={openModalHandler}
          closeModalHandler={closeModalHandler}
          deleteExpenseHandler={deleteExpenseHandler}
        />
      ))}
    </div>
  );
};
