import React, { useState } from "react";
import AddExpenseFormStyle from "./AddExpenseForm.module.css";

const AddExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onTitleChangeHandler = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const onDateChangeHandler = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };
  const onAmountChangeHandler = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
  };

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onAddData(expenseData);
  };

  const onClearHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <div className={AddExpenseFormStyle.container}>
        <form action="addExpense" onSubmit={onFormSubmitHandler}>
          <div className={AddExpenseFormStyle.addExpense}>
            <div className={AddExpenseFormStyle.form__item}>
              <label htmlFor="expenseTitle">Expense Title :-</label>
              <input
                type="text"
                onChange={onTitleChangeHandler}
                placeholder="Enter the expense Title"
                value={title}
              />
            </div>
            <div className={AddExpenseFormStyle.form__item}>
              <label htmlFor="expenseAmount">Expense Amount :-</label>
              <input
                type="Number"
                onChange={onAmountChangeHandler}
                placeholder="Enter the expense Amount"
                value={amount}
              />
            </div>
            <div className={AddExpenseFormStyle.form__item}>
              <label htmlFor="expenseDate">Expense Date :-</label>
              <input
                type="date"
                onChange={onDateChangeHandler}
                placeholder="Enter the expense Title"
                min="2019-01-01"
                max="2022-12-31"
                value={date}
              />
            </div>
          </div>
          <div className={AddExpenseFormStyle.button__container}>
            <button type="submit" onClick={onClearHandler}>
              Clear
            </button>
            <br />
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddExpenseForm;
