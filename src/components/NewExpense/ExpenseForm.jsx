import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   title: event.target.vallue,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.vallue };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   amount: event.target.vallue,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.vallue };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   date: event.target.vallue,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.vallue };
    // });
  };

  //---------- Shared Event Handler -----------------------
  //   const inputChangeHandler = (identifier, value) => {
  //     if (identifier === "title") {
  //       setTitle(value);
  //     }
  //     // ...
  //   };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={titleChangeHandler}
            // onChange={(event) => {inputChangeHandler("title", event.target.value);}}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Price</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
