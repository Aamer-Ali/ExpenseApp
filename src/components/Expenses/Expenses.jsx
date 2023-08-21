import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");
  let filteredExpenses = [];

  filteredExpenses = props.items.filter((item) => {
    return filterYear === item.date.getFullYear().toString();
  });

  const filterChangeHandler = (userSelectedYear) => {
    setFilterYear(userSelectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onYearSelected={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
