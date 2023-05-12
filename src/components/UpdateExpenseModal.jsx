import React, {useState} from "react";

const UpdateExpenseModal = ({expense, onClose, onUpdate}) => {
  if (!expense) {
    return null;
  }

  const [name, setName] = useState(expense.name);
  const [cost, setCost] = useState(expense.cost);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isNaN(cost)) {
      console.error("Error: cost is not a valid number.");
      return;
    }

    const updatedExpense = {
      ...expense,
      name,
      cost: parseFloat(cost),
    };

    onUpdate(updatedExpense);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-md px-6 py-4 mx-auto mt-32 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Update Expense Item</h2>
        <input
          className="w-full px-3 py-2 mt-4 mb-4 border border-gray-300 rounded-md"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md"
          type="number"
          placeholder="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <div className="flex items-center justify-end p-6">
          <button
            className="px-6 py-2 mr-2 text-white bg-gray-500 rounded hover:bg-gray-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateExpenseModal;
