import React, {useState, useEffect, createContext} from "react";
import User from "./models/User";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      const newUser = new User(
        userObj.email,
        userObj.password,
        userObj.name,
        userObj.accountBalance
      );
      newUser.expenseItems = userObj.expenseItems;
      setUser(newUser);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user.toJSON()));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{user, setUser, loading}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
