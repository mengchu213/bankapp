import React from "react";
import ExpenseItemModel from "../models/ExpenseItem";
import User from "../models/User";

const ExpenseHandler = ({user, setUser}) => {
  const handleAddExpense = (expense) => {
    const newExpense = new ExpenseItemModel(expense.name, expense.cost, user);
    const {newExpenseItems, newAccountBalance} =
      user.addExpenseItem(newExpense);

    const updatedUser = new User(
      user.email,
      user.password,
      user.name,
      newAccountBalance
    );

    updatedUser.expenseItems = newExpenseItems;

    setUser(updatedUser);
  };

  const handleUpdateExpense = (index, updatedExpense) => {
    if (updatedExpense.cost === undefined) {
      console.error("Error: updatedExpense.cost is undefined");
      return;
    }

    setUser((prevUser) => {
      const userCopy = new User(
        prevUser.email,
        prevUser.password,
        prevUser.name,
        prevUser.accountBalance
      );
      userCopy.expenseItems = [...prevUser.expenseItems];
      userCopy.updateExpenseItem(index, updatedExpense);
      return userCopy;
    });
  };

  const handleDeleteExpense = (index) => {
    setUser((prevUser) => {
      const userCopy = new User(
        prevUser.email,
        prevUser.password,
        prevUser.name,
        prevUser.accountBalance
      );
      userCopy.expenseItems = [...prevUser.expenseItems];
      userCopy.deleteExpenseItem(index);
      return userCopy;
    });
  };

  return {handleAddExpense, handleUpdateExpense, handleDeleteExpense};
};

export default ExpenseHandler;
