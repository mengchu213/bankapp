const User = (email, password, name, accountBalance) => {
  const expenseItems = [];

  const addExpenseItem = (expense) => {
    expenseItems.push(expense);
    accountBalance -= expense.cost;
    return {
      newExpenseItems: [...expenseItems],
      newAccountBalance: accountBalance,
    };
  };

  const deleteExpenseItem = (index) => {
    accountBalance += expenseItems[index].cost;
    expenseItems.splice(index, 1);
  };

  const updateExpenseItem = (index, updatedExpense) => {
    accountBalance += expenseItems[index].cost - updatedExpense.cost;
    expenseItems[index].update(updatedExpense);
  };

  const listExpenseItems = () => {
    return expenseItems;
  };

  return {
    email,
    password,
    name,
    accountBalance,
    expenseItems,
    addExpenseItem,
    deleteExpenseItem,
    updateExpenseItem,
    listExpenseItems,
  };
};

export default User;
