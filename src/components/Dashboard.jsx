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
    setUser({
      ...user,
      expenseItems: newExpenseItems,
      accountBalance: newAccountBalance,
    });
  };

  const handleUpdateExpense = (index, updatedExpense) => {
    user.updateExpenseItem(index, updatedExpense);
    setUser((prevState) => ({...prevState}));
  };

  const handleDeleteExpense = (index) => {
    user.deleteExpenseItem(index);
    setUser((prevState) => ({...prevState}));
  };

  if (!user) {
    return null;
  }

  return (
    <div className="bg-primary min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Account Information</h2>
          </div>
          <div className="mb-4">
            <UserInfo user={user} />
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
          {updatingExpense !== null && (
            <UpdateExpenseModal
              onClose={() => setUpdatingExpense(null)}
              onUpdate={(updatedExpense) =>
                handleUpdateExpense(updatingExpense.index, updatedExpense)
              }
              expenseItem={user.expenseItems[updatingExpense.index]}
            />
          )}
          {user.expenseItems.length > 0 ? (
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
