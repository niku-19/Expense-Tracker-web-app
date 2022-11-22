import React, { useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import MainContent from "./components/MainContent";
import "./App.css";
import ExpenseDatas from "./Data/Data";

function App() {
  const [datas, setDatas] = useState(ExpenseDatas);
  const onDataAdd = (ExpenseData) => {
    setDatas((prev) => {
      return [ExpenseData, ...ExpenseDatas];
    });
  };

  localStorage.setItem("ExpenseData", datas);

  return (
    <>
      <h1 align="center">Add Your Personal Expense</h1>
      <AddExpenseForm onAddData={onDataAdd} />
      <MainContent ListData={datas} />
    </>
  );
}

export default App;
