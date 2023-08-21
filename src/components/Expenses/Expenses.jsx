import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");
  let filteredExpenses = [];

  filteredExpenses = props.items.filter((item) => {
    return filterYear === item.date.getFullYear().toString();
  });

  const filterChangeHandler = (userSelectedYear) => {
    setFilterYear(userSelectedYear);
  };

  let expenseContent = <p> No expense record found </p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onYearSelected={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
