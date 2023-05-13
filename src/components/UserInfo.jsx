import React from "react";

const UserInfo = ({user}) => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-lg font-bold">
        Name:{" "}
        <span className=" text-gray-700 text-xl font-medium pl-1">
          {user.name}
        </span>
      </h3>
      <h3 className="text-lg font-bold">
        Email:{" "}
        <span className=" text-gray-700 text-xl font-medium pl-1">
          {user.email}
        </span>
      </h3>
      <h3 className="text-lg font-bold">
        Account Balance:{" "}
        <span className=" text-gray-700 text-xl font-medium pl-1">
          ${user.accountBalance.toFixed(2)}
        </span>
      </h3>
    </div>
  );
};

export default UserInfo;
