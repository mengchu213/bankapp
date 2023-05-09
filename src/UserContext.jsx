import {createContext, useState} from "react";
import User from "./models/User";

const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext};
