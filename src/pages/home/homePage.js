import { Link } from "react-router-dom";
import Home from "../../Components/home/home";
import { useAuth } from "../../context/auth/auhContextProvider";

const HomePage = () => {
  const auth = useAuth();

  return (
    <section>
      {auth ? (
        <Home />
      ) : (
        <h2 className='text-center font-medium text-blue-800 '>
          <Link to='/login'> dont Login yet ?</Link>
        </h2>
      )}
    </section>
  );
};

export default HomePage;
