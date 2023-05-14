import React from "react";

const UserInfo = ({user}) => {
  return (
    <div className="block max-w-md py-8 px-8 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500  focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
      <h3 className="text-lg font-bold mb-3 text-gray-100">
        Account Balance:{" "}
        <span className=" text-gray-100 text-xl font-medium pl-1">
          ${user.accountBalance.toFixed(2)}
        </span>
      </h3>
      <h3 className="text-lg font-bold mb-3 text-gray-100">
        Name:{" "}
        <span className=" text-gray-100 text-xl font-medium pl-1">
          {user.name}
        </span>
      </h3>
      <h3 className="text-lg font-bold mb-3 text-gray-100">
        Email:{" "}
        <span className=" text-gray-100 text-xl font-medium pl-1">
          {user.email}
        </span>
      </h3>

      <h3 className="text-lg font-bold mb-2 text-gray-100">
        Card Number:
        <span className="  text-gray-100 text-xl font-medium pl-1">
          4648 9800 0112 3569
        </span>
      </h3>
    </div>
  );
};

export default UserInfo;
