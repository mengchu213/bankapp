import React from "react";

const AccountActions = ({onDeposit, onWithdraw, onTransfer}) => {
  return (
    <div className=" flex justify-center items-center flex-col  ">
      <button
        onClick={onDeposit}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
      >
        Deposit
      </button>
      <button
        onClick={onWithdraw}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
      >
        Withdraw
      </button>
      <button
        onClick={onTransfer}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2"
      >
        Transfer Money
      </button>
    </div>
  );
};

export default AccountActions;
