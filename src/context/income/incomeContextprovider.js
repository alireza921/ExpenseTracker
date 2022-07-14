import { createContext, useContext, useState } from "react";

const IncomContext = createContext();
const IncomContextDispatcher = createContext();

const IncomContextProvider = ({ children }) => {
  const [income, dispatch] = useState(false);

  return (
    <IncomContext.Provider value={income}>
      <IncomContextDispatcher.Provider value={dispatch}>
        {children}
      </IncomContextDispatcher.Provider>
    </IncomContext.Provider>
  );
};

export default IncomContextProvider;

export const useIncom = () => useContext(IncomContext);
export const useIncomAction = () => useContext(IncomContextDispatcher);
