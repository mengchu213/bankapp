class ExpenseItem {
  constructor(name, cost, owner) {
    this.name = name;
    this.cost = cost;
    this.owner = owner.name;
  }

  update(newData) {
    this.name = newData.name || this.name;
    this.cost = newData.cost || this.cost;
    this.owner = newData.owner || this.owner;
  }
}

export default ExpenseItem;
