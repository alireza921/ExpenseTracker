import { Link } from "react-router-dom";
import Home from "../../Components/home/home";
import { useAuth } from "../../context/auth/auhContextProvider";

const HomePage = () => {
  const auth = useAuth();
  return (
    <section>
      {auth ? <Home /> : <Link to='/login'> dont Login yet ?</Link>}
      <div className="flex justify-between my-1"> 
        <h2 > transAction</h2>
        <p> view all </p>
      </div>
    </section>
  );
};

export default HomePage;
