import React, {useContext, useState, useEffect} from "react";
import {UserContext} from "../UserContext.jsx";
import {useNavigate} from "react-router-dom";
import AddExpenseModal from "./AddExpenseModal";
import UpdateExpenseModal from "./UpdateExpenseModal";
import ExpenseItem from "./ExpenseItem";
import UserInfo from "./UserInfo";

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
    const newExpense = new ExpenseItem(expense.name, expense.cost, user);
    user.addExpenseItem(newExpense);
    setUser({...user});
  };

  const handleUpdateExpense = (index, updatedExpense) => {
    user.updateExpenseItem(index, updatedExpense);
    setUser({...user});
  };

  const handleDeleteExpense = (index) => {
    user.deleteExpenseItem(index);
    setUser({...user});
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
            <p key="name">
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p key="email">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p key="accountBalance">
              <span className="font-semibold">Account Balance:</span> $
              {user.accountBalance?.toFixed(2) ?? "0.00"}
            </p>
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
          {user.expenseItems.length > 0 ? (
            <div className="space-y-4">
              {user.expenseItems.map((item, index) => (
                <ExpenseItem
                  key={index}
                  item={item}
                  onUpdate={() => setUpdatingExpense(index)}
                  onDelete={() => handleDeleteExpense(index)}
                  index={index}
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
