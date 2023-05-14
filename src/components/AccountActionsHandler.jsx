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

  return {handleDeposit, handleWithdraw};
};

export default AccountActionsHandler;
