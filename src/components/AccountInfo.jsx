import React, {useState} from "react";
import AccountActions from "./AccountActions";
import UserInfo from "./UserInfo";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";

const AccountInfo = ({user, handleDeposit, handleWithdraw}) => {
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semi">Account Information</h2>
        <AccountActions
          onDeposit={() => setDepositModalOpen(true)}
          onWithdraw={() => setWithdrawModalOpen(true)}
        />
      </div>
      <div className="mb-4">
        {user ? <UserInfo user={user} /> : <p>Loading...</p>}
      </div>
      {depositModalOpen && (
        <DepositModal
          isOpen={depositModalOpen}
          onClose={() => setDepositModalOpen(false)}
          onDeposit={handleDeposit}
        />
      )}
      {withdrawModalOpen && (
        <WithdrawModal
          isOpen={withdrawModalOpen}
          onClose={() => setWithdrawModalOpen(false)}
          onWithdraw={handleWithdraw}
        />
      )}
    </div>
  );
};

export default AccountInfo;
