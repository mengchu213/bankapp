import React, {useContext, useState, useEffect} from "react";
import {UserContext} from "../UserContext.jsx";
import {useNavigate} from "react-router-dom";
import AddExpenseModal from "./AddExpenseModal";
import UpdateExpenseModal from "./UpdateExpenseModal";
import ExpenseItem from "./ExpenseItem";
import UserInfo from "./UserInfo";
import ExpenseItemModel from "../models/ExpenseItem";
import User from "../models/User";

const Dashboard = () => {
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const [addingExpense, setAddingExpense] = useState(false);
  const [updatingExpense, setUpdatingExpense] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

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

  return (
    <div className="bg-primary min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Account Information</h2>
          </div>
          <div className="mb-4">
            {user ? <UserInfo user={user} /> : <p>Loading...</p>}
          </div>
          <div className="border-b-2 border-gray-200 mb-4"></div>
          <div className="mb-4">
            <h2 className="text-2xl font-semibold">Expense Items</h2>
          </div>
          <button
            className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
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
      </div>
    </div>
  );
};

export default Dashboard;
