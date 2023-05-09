import React from "react";

const UserInfo = ({user}) => {
  return (
    <div>
      <p>
        <span className="font-semibold">Name:</span> {user.name}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p>
        <span className="font-semibold">Account Balance:</span> $
        {user.accountBalance?.toFixed(2) ?? "0.00"}
      </p>
    </div>
  );
};

export default UserInfo;
