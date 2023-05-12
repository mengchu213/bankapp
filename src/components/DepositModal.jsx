import React, {useState} from "react";

const DepositModal = ({isOpen, onClose, onDeposit}) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onDeposit(Number(amount));
    setAmount("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <form className="bg-white rounded p-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Deposit Amount</h2>
        <input
          type="number"
          className="border rounded w-full p-2 mb-4"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Deposit
        </button>
        <button
          type="button"
          className="px-4 py-2 ml-2 text-white bg-gray-500 rounded hover:bg-gray-700"
          onClick={onClose}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default DepositModal;
