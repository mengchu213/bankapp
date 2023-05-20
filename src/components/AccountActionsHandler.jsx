import React from "react";
import User from "../models/User";

export const AccountActionsHandler = ({user, setUser}) => {
  const handleDeposit = (amount) => {
    setUser((prevUser) => {
      const userCopy = new User(
        prevUser.email,
        prevUser.password,
        prevUser.name,
        prevUser.accountBalance + Number(amount),
        prevUser.expenseItems
      );
      return userCopy;
    });
  };

  const handleWithdraw = (amount) => {
    setUser((prevUser) => {
      const userCopy = new User(
        prevUser.email,
        prevUser.password,
        prevUser.name,
        prevUser.accountBalance - Number(amount),
        prevUser.expenseItems
      );
      return userCopy;
    });
  };
  const handleTransfer = (amount, cardNumber) => {
    if (cardNumber.length < 12) {
      throw new Error(
        "Invalid card number. Card number should be at least 12 digits long."
      );
    }

    setUser((prevUser) => {
      const userCopy = new User(
        prevUser.email,
        prevUser.password,
        prevUser.name,
        prevUser.accountBalance - Number(amount),
        prevUser.expenseItems
      );
      return userCopy;
    });
  };

  return {handleDeposit, handleWithdraw, handleTransfer};
};

export default AccountActionsHandler;
