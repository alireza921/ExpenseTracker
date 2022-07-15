import { createContext, useContext, useState } from "react";

const TransActionsContext = createContext();
const TransActionsContextDispatcher = createContext();

const TransActionsContextProvider = ({ children }) => {
  const [transActions, dispatch] = useState([]);

  return (
    <TransActionsContext.Provider value={transActions}>
      <TransActionsContextDispatcher.Provider value={dispatch}>
        {children}
      </TransActionsContextDispatcher.Provider>
    </TransActionsContext.Provider>
  );
};

export default TransActionsContextProvider;

export const useTransActions = () => useContext(TransActionsContext);
export const useTransActionsAction = () => useContext(TransActionsContextDispatcher);
