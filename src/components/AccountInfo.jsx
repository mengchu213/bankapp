import React, {useState} from "react";
import AccountActions from "./AccountActions";
import UserInfo from "./UserInfo";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";
import TransferModal from "./TransferModal";

const AccountInfo = ({user, handleDeposit, handleWithdraw, handleTransfer}) => {
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [transferModalOpen, setTransferModalOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semi">Account Information</h2>
        <AccountActions
          onDeposit={() => setDepositModalOpen(true)}
          onWithdraw={() => setWithdrawModalOpen(true)}
          onTransfer={() => setTransferModalOpen(true)}
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
      {transferModalOpen && (
        <TransferModal
          isOpen={transferModalOpen}
          onClose={() => setTransferModalOpen(false)}
          onTransfer={handleTransfer}
        />
      )}
    </div>
  );
};

export default AccountInfo;
