import { useAuth } from "../../context/auth/auhContextProvider";
import { Link } from "react-router-dom";

const Navigation = () => {
  const auth = useAuth();
  return (
    <header>
      user name : {auth.name}
      <Link to='login'>Login</Link>
    </header>
  );
};

export default Navigation;
