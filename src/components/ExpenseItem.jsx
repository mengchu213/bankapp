import React, {useState} from "react";
import UpdateExpenseModal from "./UpdateExpenseModal";

const ExpenseItem = ({item, onUpdate, onDelete, index, setUpdatingExpense}) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p>${item.cost?.toFixed(2)}</p>
        </div>
        <div className="flex items-center">
          <button
            className="text-blue-500 font-bold mr-4"
            onClick={() => setUpdatingExpense(index)}
          >
            Update
          </button>
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
