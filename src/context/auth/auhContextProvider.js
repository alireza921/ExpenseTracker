import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatcher = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, dispatch] = useState(false);

  return (
    <AuthContext.Provider value={auth}>
      <AuthContextDispatcher.Provider value={dispatch}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispatcher);
