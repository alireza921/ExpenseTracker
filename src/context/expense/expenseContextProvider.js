import { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();
const ExpenseContextDispatcher = createContext();

const AuthContextProvider = ({ children }) => {
  const [expense, dispatch] = useState(false);

  return (
    <ExpenseContext.Provider value={expense}>
      <ExpenseContextDispatcher.Provider value={dispatch}>
        {children}
      </ExpenseContextDispatcher.Provider>
    </ExpenseContext.Provider>
  );
};

export default ExpenseContextProvider;

export const useAuth = () => useContext(ExpenseContext);
export const useAuthAction = () => useContext(ExpenseContextDispatcher);
