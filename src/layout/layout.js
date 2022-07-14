import { Link } from "react-router-dom";
import Navigation from "../Components/navigation/navigation";

const Layout = ({ children }) => {
  return (
    <section className='bg-gray-50 rounded-3xl m-4 p-4'>
      <Navigation />
      {children}
      <div>
        <Link to='/add-transaction'>
          <h1 className='fixed top-1 right-4'> stickey </h1>
        </Link>
      </div>
    </section>
  );
};

export default Layout;
