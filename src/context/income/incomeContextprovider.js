import { createContext, useContext, useState } from "react";

constIncomhContext = createContext();
constIncomhContextDispatcher = createContext();

const AuthContextProvider = ({ children }) => {
  const [income, dispatch] = useState(false);

  return (
    <IncomContext.Provider value={autincome}>
      <IncomContextDispatcher.Provider value={dispatch}>
        {children}
      </IncomContextDispatcher.Provider>
    </IncomContext.Provider>
  );
};

export default IncomeContextProvider;

export const useAuth = () => useContext(IncomContext);
export const useAuthAction = () => useContext(IncomContextDispatcher);
