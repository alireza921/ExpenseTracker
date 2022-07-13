import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth/auhContextProvider";

const HomePage = () => {
  const auth = useAuth();
  return (
    <div>
      <h2> Home Page </h2>
      {!auth && <Link to='/login'> dont LoginYet ? </Link>}{" "}
    </div>
  );
};

export default HomePage;
