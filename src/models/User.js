class User {
  constructor(email, password, name, accountBalance) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.accountBalance = accountBalance;
    this.expenseItems = [];
  }

  addExpenseItem(expense) {
    this.expenseItems.push(expense);
    this.accountBalance -= expense.cost;
  }

  deleteExpenseItem(index) {
    this.accountBalance += this.expenseItems[index].cost;
    this.expenseItems.splice(index, 1);
  }

  updateExpenseItem(index, updatedExpense) {
    this.accountBalance += this.expenseItems[index].cost - updatedExpense.cost;
    this.expenseItems[index].update(updatedExpense);
  }

  listExpenseItems() {
    return this.expenseItems;
  }
}

export default User;
