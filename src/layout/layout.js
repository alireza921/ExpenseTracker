import Navigation from "../Components/navigation/navigation";
import { useAuth } from "../context/auth/auhContextProvider";
const Layout = ({ children }) => {
  return (
    <section className='bg-gray-50 rounded-3xl m-4 p-4'>
      <Navigation />
      {children}
    </section>
  );
};

export default Layout;
