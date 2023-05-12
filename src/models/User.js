class User {
  constructor(email, password, name, accountBalance) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.accountBalance = accountBalance;
    this.expenseItems = [];
  }

  addExpenseItem(expense) {
    const cost = parseFloat(expense.cost);
    if (isNaN(cost)) {
      throw new Error(`Invalid expense cost: ${expense.cost}`);
    }
    this.expenseItems = [...this.expenseItems, expense];
    this.accountBalance -= cost;
    return {
      newExpenseItems: [...this.expenseItems],
      newAccountBalance: this.accountBalance,
    };
  }

  deleteExpenseItem(index) {
    const cost = parseFloat(this.expenseItems[index].cost);
    if (isNaN(cost)) {
      throw new Error(`Invalid expense cost: ${this.expenseItems[index].cost}`);
    }
    this.accountBalance += cost;
    this.expenseItems = this.expenseItems.filter((_, i) => i !== index);
  }

  updateExpenseItem(index, updatedExpense) {
    const oldCost = parseFloat(this.expenseItems[index].cost);
    const newCost = parseFloat(updatedExpense.cost);
    if (isNaN(oldCost) || isNaN(newCost)) {
      throw new Error(
        `Invalid expense cost. Old cost: ${this.expenseItems[index].cost}, new cost: ${updatedExpense.cost}`
      );
    }
    this.accountBalance += oldCost - newCost;
    this.expenseItems = this.expenseItems.map((item, i) =>
      i === index ? updatedExpense : item
    );
  }
}

export default User;
