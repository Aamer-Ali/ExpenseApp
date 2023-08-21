import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSaveExpenseData }) => {
  const saveExpenseData = (enterdExpenseData) => {
    const expenseData = { id: Math.random().toString(), ...enterdExpenseData };
    onSaveExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
