import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import HomePage from "./pages/home/homePage";
import AddNewTransAction from "./pages/cadd New TransAction/addNewTransAction";
import TransAction from "./pages/transAction/transAction";
import LoginPage from "./pages/loginPage/loginPage";
import AuthContextProvider from "./context/auth/auhContextProvider";

function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/add-transaction' element={<AddNewTransAction />} />
              <Route path='/transaction' element={<TransAction />} />
              <Route path='/login' element={<LoginPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}
// }

export default App;
