import { Link } from "react-router-dom";
import Navigation from "../Components/navigation/navigation";
import { useAuth } from "../context/auth/auhContextProvider";
import { IoMdAdd } from "react-icons/io";
const Layout = ({ children }) => {
  const auth = useAuth();
  return (
    <section className='bg-gray-50 rounded-3xl m-4 p-4'>
      <Navigation />
      {children}
      <div>
        {auth && (
          <Link to='/add-transaction '>
            <h1 className='fixed bottom-10 right-4 p-2 text-2xl  text-gray-100 rounded-full bg-violet-500'>
              <IoMdAdd />
            </h1>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Layout;
