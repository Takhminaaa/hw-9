import { useEffect, useState } from "react";
import { NewExpense } from "./components/new-expense/NewExpense";
import { EXPENSES } from "./utils/constants";
import { Expenses } from "./components/expenses/Expenses";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Users from "./components/Users";

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [expenseDeleteId, setExpenseDeleteId] = useState(null);

  const openModalHandler = (expenseId) => {
    setShowModalDelete(true);
    setExpenseDeleteId(expenseId);
  };

  const deleteExpenseHandler = () => {
    const newExpenses = expenses.filter((item) => item.id !== expenseDeleteId);
    setExpenses(newExpenses);
    setExpenseDeleteId(null);
  };

  const closeModalHandler = () => {
    setShowModalDelete(false);
  };

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const usersHandler = () => {
    setUsers(true);
  };

  const onAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const loginHandler = () => {
    setIsLogin(true);

    localStorage.setItem("auth", !isLogin);
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    setIsLogin(isAuth);
  }, []);
  const logOutHandler = () => {
    setIsLogin(false);
    localStorage.removeItem("auth");
  };

  return (
    <>
      <Header
        isLogin={isLogin}
        onLogout={logOutHandler}
        onUsers={usersHandler}
        onShowModal={openModal}
        closeModal={closeModal}
        showModal={showModal}
      />

      {isLogin ? (
        <>
          {users ? (
            <Users />
          ) : (
            <>
              <NewExpense onAddExpense={onAddExpense} />

              <Expenses
                showModalDelete={showModalDelete}
                openModalHandler={openModalHandler}
                closeModalHandler={closeModalHandler}
                expenses={expenses}
                deleteExpenseHandler={deleteExpenseHandler}
              />
            </>
          )}
        </>
      ) : (
        <Login onLogin={loginHandler} />
      )}
    </>
  );
};
export default App;
