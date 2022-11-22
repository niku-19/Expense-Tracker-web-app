import React from "react";
import ExpenseListStyle from "./ExpenseList.module.css";
const ExpenseList = (props) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className={ExpenseListStyle.container}>
        <div className={ExpenseListStyle.listGrid}>
          <div className={ExpenseListStyle.GridItem}>
            <div className={ExpenseListStyle.date__container}>
              <div>{month[props.months]}</div>
              <div>{props.years}</div>
              <div>{props.dates}</div>
            </div>
          </div>
          <div className={ExpenseListStyle.GridItem}>
            <div>{props.titles}</div>
          </div>
          <div className={ExpenseListStyle.GridItem}>
            <div className={ExpenseListStyle.amount__container}>
              <div>₹{props.amounts}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
