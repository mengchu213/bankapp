import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseItemsList = ({
  user,
  handleUpdateExpense,
  handleDeleteExpense,
  setUpdatingExpense,
}) => {
  return user && user.expenseItems.length > 0 ? (
    <div className="space-y-4">
      {user.expenseItems.map((item, index) => (
        <ExpenseItem
          key={index}
          item={item}
          onUpdate={(updatedExpense) => {
            handleUpdateExpense(index, updatedExpense);
            setUpdatingExpense(null);
          }}
          onDelete={() => handleDeleteExpense(index)}
          index={index}
          setUpdatingExpense={setUpdatingExpense}
        />
      ))}
    </div>
  ) : (
    <p>No expense items found.</p>
  );
};

export default ExpenseItemsList;
