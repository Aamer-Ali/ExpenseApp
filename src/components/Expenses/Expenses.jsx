import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
