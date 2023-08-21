import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSaveExpenseData }) => {
  const saveExpenseData = (enterdExpenseData) => {
    const expenseData = { id: Math.random().toString(), ...enterdExpenseData };
    onSaveExpenseData(expenseData);
  };

  const [isEditing, setIsEdititng] = useState(false);

  const stratEditingHandler = () => {
    setIsEdititng(true);
  };

  const stopEditingHandler = () => {
    setIsEdititng(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={stratEditingHandler}> Add New Expense </button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
