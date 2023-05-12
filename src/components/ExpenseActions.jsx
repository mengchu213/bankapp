import React, {useState} from "react";
import AddExpenseModal from "./AddExpenseModal";
import UpdateExpenseModal from "./UpdateExpenseModal";

const ExpenseActions = ({
  handleAddExpense,
  handleUpdateExpense,
  user,
  updatingExpense,
  setUpdatingExpense,
}) => {
  const [addingExpense, setAddingExpense] = useState(false);

  return (
    <div>
      <button
        className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={() => setAddingExpense(true)}
      >
        Add Expense Item
      </button>
      {addingExpense && (
        <AddExpenseModal
          onClose={() => setAddingExpense(false)}
          onAdd={handleAddExpense}
        />
      )}
      {user &&
        updatingExpense !== null &&
        user.expenseItems[updatingExpense] && (
          <UpdateExpenseModal
            onClose={() => setUpdatingExpense(null)}
            onUpdate={(updatedExpense) =>
              handleUpdateExpense(updatingExpense, updatedExpense)
            }
            expense={user.expenseItems[updatingExpense]}
          />
        )}
    </div>
  );
};

export default ExpenseActions;
