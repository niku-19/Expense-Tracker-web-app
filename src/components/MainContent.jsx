import React, { useState } from "react";
import MainContentStyle from "./MainContent.module.css";
import ExpenseList from "./ExpenseList";
import FilterByYear from "../components/FilterByYear";

const MainContent = (props) => {
  const [filteredYear, setFilteredYear] = useState("");
  const onYearFilterHandler = (FilterValue) => {
    setFilteredYear(FilterValue);
  };

  const myYear = props.ListData.filter((items) => {
    return items.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      <div className={MainContentStyle.container}>
        <h1 align="center">Expense List</h1>
        <FilterByYear onFilterYear={onYearFilterHandler} />

        {myYear.length === 0 ? (
          <>
            <div className={MainContentStyle.flex__div}>
              <div className={MainContentStyle.not__found}>
                <h1>NO Expense Found! Go Ahead and Add Your Expenes</h1>
              </div>
            </div>
          </>
        ) : (
          myYear.map((datas) => {
            return (
              <>
                <ExpenseList
                  months={datas.date.getMonth().toString()}
                  years={datas.date.getFullYear().toString()}
                  dates={datas.date.getDate().toString()}
                  titles={datas.title}
                  amounts={datas.amount}
                  Key={datas.id}
                />
              </>
            );
          })
        )}

        {/* <ExpenseList
          months={ExpenseData[0].date.getMonth().toString()}
          years={ExpenseData[0].date.getFullYear().toString()}
          dates={ExpenseData[0].date.getDate().toString()}
          titles={ExpenseData[0].title}
          amounts={ExpenseData[0].amount}
        />
        <ExpenseList
          months={ExpenseData[1].date.getMonth().toString()}
          years={ExpenseData[1].date.getFullYear().toString()}
          dates={ExpenseData[1].date.getDate().toString()}
          titles={ExpenseData[1].title}
          amounts={ExpenseData[1].amount}
        />
        <ExpenseList
          months={ExpenseData[2].date.getMonth().toString()}
          years={ExpenseData[2].date.getFullYear().toString()}
          dates={ExpenseData[2].date.getDate().toString()}
          titles={ExpenseData[2].title}
          amounts={ExpenseData[2].amount}
        />
        <ExpenseList
          months={ExpenseData[3].date.getMonth().toString()}
          years={ExpenseData[3].date.getFullYear().toString()}
          dates={ExpenseData[3].date.getDate().toString()}
          titles={ExpenseData[3].title}
          amounts={ExpenseData[3].amount}
        />
        <ExpenseList
          months={ExpenseData[4].date.getMonth().toString()}
          years={ExpenseData[4].date.getFullYear().toString()}
          dates={ExpenseData[4].date.getDate().toString()}
          titles={ExpenseData[4].title}
          amounts={ExpenseData[4].amount}
        /> */}
      </div>
    </>
  );
};

export default MainContent;
