import React from "react";

const ExpenseItem = ({item, onUpdate, onDelete, index}) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p>Cost: ${item.cost.toFixed(2)}</p>
      <p>Owner: {item.owner}</p>
      <button
        className="px-2 py-1 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={onUpdate}
      >
        Update
      </button>
      <button
        className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-700"
        onClick={onDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseItem;
