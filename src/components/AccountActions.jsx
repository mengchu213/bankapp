import React from "react";

const AccountActions = ({onDeposit, onWithdraw}) => {
  return (
    <div className="mt-6">
      <button
        onClick={onDeposit}
        className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Deposit
      </button>
      <button
        onClick={onWithdraw}
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
      >
        Withdraw
      </button>
    </div>
  );
};

export default AccountActions;
