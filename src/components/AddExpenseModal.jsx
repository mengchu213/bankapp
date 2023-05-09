import React, {useContext, useState} from "react";
import {UserContext} from "../UserContext.jsx";

import ExpenseItem from "../models/ExpenseItem";

const AddExpenseModal = ({onClose, onAdd}) => {
  const {user} = useContext(UserContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpenseItem = new ExpenseItem(name, parseFloat(cost), user);
    onAdd(newExpenseItem);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg w-96 p-6">
        <h2 className="text-2xl font-semibold mb-4">Add Expense Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Cost</label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="number"
              step="0.01"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
              type="submit"
            >
              Add
            </button>
            <button
              className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-700"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpenseModal;
