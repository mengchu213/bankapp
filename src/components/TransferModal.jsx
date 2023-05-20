import React, {useState} from "react";

const TransferModal = ({isOpen, onClose, onTransfer}) => {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("Submitting Transfer:", amount, "to", cardNumber);
      onTransfer(parseFloat(amount), cardNumber);
      setAmount("");
      setCardNumber("");
      onClose();
    } catch (error) {
      alert(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <form className="bg-white rounded p-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-4">Transfer Amount</h2>
        <input
          type="number"
          className="border rounded w-full p-2 mb-4"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
        />
        <input
          type="text"
          className="border rounded w-full p-2 mb-4"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Enter Card Number"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
        >
          Transfer
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

export default TransferModal;
