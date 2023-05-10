import React, {useState} from "react";
import UpdateExpenseModal from "./UpdateExpenseModal";

const ExpenseItem = ({item, onUpdate, onDelete, index}) => {
  const [updatingExpense, setUpdatingExpense] = useState(false);

  const handleUpdate = (updatedExpense) => {
    onUpdate(index, updatedExpense);
    setUpdatingExpense(false);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p>${item.cost.toFixed(2)}</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-blue-500 font-bold mr-4"
            onClick={() => setUpdatingExpense(true)}
          >
            Update
          </button>
          {updatingExpense && (
            <UpdateExpenseModal
              expense={item}
              onClose={() => setUpdatingExpense(false)}
              onUpdate={handleUpdate}
            />
          )}
          <button
            className="text-red-500 font-bold"
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
