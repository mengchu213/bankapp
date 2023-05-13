import React, {useContext, useState, useEffect} from "react";
import {UserContext} from "../UserContext.jsx";
import {useNavigate} from "react-router-dom";
import AddExpenseModal from "./AddExpenseModal";
import UpdateExpenseModal from "./UpdateExpenseModal";
import ExpenseItem from "./ExpenseItem";
import UserInfo from "./UserInfo";
import ExpenseItemModel from "../models/ExpenseItem";
import User from "../models/User";
import AccountActions from "./AccountActions";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";
import {logo, robot} from "../assets/index.js";
import styles from "../style.js";

const Dashboard = () => {
  const {user, setUser, loading} = useContext(UserContext);
  const navigate = useNavigate();
  const [addingExpense, setAddingExpense] = useState(false);
  const [updatingExpense, setUpdatingExpense] = useState(null);
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, navigate, loading]);

  const handleAddExpense = (expense) => {
    const newExpense = new ExpenseItemModel(expense.name, expense.cost, user);
    const {newExpenseItems, newAccountBalance} =
      user.addExpenseItem(newExpense);

    const updatedUser = new User(
      user.email,
      user.password,
      user.name,
      newAccountBalance
    );

    updatedUser.expenseItems = newExpenseItems;

    setUser(updatedUser);
  };

  const handleUpdateExpense = (index, updatedExpense) => {
    if (updatedExpense.cost === undefined) {
      console.error("Error: updatedExpense.cost is undefined");
      return;
    }

    setUser((prevUser) => {
      const userCopy = new User(
        prevUser.email,
        prevUser.password,
        prevUser.name,
        prevUser.accountBalance
      );
      userCopy.expenseItems = [...prevUser.expenseItems];
      userCopy.updateExpenseItem(index, updatedExpense);
      return userCopy;
    });
  };

  const handleDeleteExpense = (index) => {
    setUser((prevUser) => {
      const userCopy = new User(
        prevUser.email,
        prevUser.password,
        prevUser.name,
        prevUser.accountBalance
      );
      userCopy.expenseItems = [...prevUser.expenseItems];
      userCopy.deleteExpenseItem(index);
      return userCopy;
    });
  };
  const handleDeposit = (amount) => {
    setUser((prevUser) => {
      const userCopy = new User(
        prevUser.email,
        prevUser.password,
        prevUser.name,
        prevUser.accountBalance + Number(amount),
        prevUser.expenseItems
      );
      return userCopy;
    });
  };

  const handleWithdraw = (amount) => {
    setUser((prevUser) => {
      const userCopy = new User(
        prevUser.email,
        prevUser.password,
        prevUser.name,
        prevUser.accountBalance - Number(amount),
        prevUser.expenseItems
      );
      return userCopy;
    });
  };

  return (
    <div className="bg-primary min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <img src={logo} alt="bank" className="mb-8" />
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-8 rounded-lg shadow-md col-span-2">
            <h2 className="text-2xl  mb-4 font-bold">Account Information</h2>
            {user ? <UserInfo user={user} /> : <p>Loading...</p>}
            <div className="border-b-2 border-gray-300 mb-4"></div>
            <h2 className="text-2xl font-bold mb-4">Expense Items</h2>
            <button
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => setAddingExpense(true)}
            >
              Add Expense Item
            </button>
            {addingExpense && (
              <AddExpenseModal
                onClose={() => setAddingExpense(false)}
                onAdd={handleAddExpense}
              />
            )}
            {user &&
              updatingExpense !== null &&
              user.expenseItems[updatingExpense] && (
                <UpdateExpenseModal
                  onClose={() => setUpdatingExpense(null)}
                  onUpdate={(updatedExpense) =>
                    handleUpdateExpense(updatingExpense, updatedExpense)
                  }
                  expense={user.expenseItems[updatingExpense]}
                />
              )}

            {user && user.expenseItems.length > 0 ? (
              <div className="space-y-4">
                {user.expenseItems.map((item, index) => (
                  <ExpenseItem
                    key={index}
                    item={item}
                    onUpdate={(updatedExpense) => {
                      handleUpdateExpense(index, updatedExpense);
                      setUpdatingExpense(null);
                    }}
                    onDelete={() => handleDeleteExpense(index)}
                    index={index}
                    setUpdatingExpense={setUpdatingExpense}
                  />
                ))}
              </div>
            ) : (
              <p>No expense items found.</p>
            )}
          </div>
          <div className="col-span-1">
            <div
              className="bg-blue-100 p-8 rounded-lg shadow-md mb-4"
              style={{maxHeight: "300px"}}
            >
              <div className="flex flex-col items-center">
                <AccountActions
                  onDeposit={() => setDepositModalOpen(true)}
                  onWithdraw={() => setWithdrawModalOpen(true)}
                  className="w-full text-center text-xl py-2 mb-2"
                />
              </div>
            </div>
            <div
              className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
            >
              <img
                src={robot}
                alt=""
                className="w-[100%] h-[100%] relative z-[5]"
              />
              <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
              <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
              <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
