import { useAuth, useAuthAction } from "../../context/auth/auhContextProvider";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { MdLogin } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navigation = () => {
  const auth = useAuth();
  const setAuth = useAuthAction();
  const navigate = useNavigate();
  const logoutHandler = () => {
    if (auth) {
      alert("do you want to logout ? ");
      setAuth(false);
      navigate('/')
    }
  };

  return (
    <header className='flex  justify-between items-center '>
      <aside className='flex  justify-start items-center'>
        <div>
          <BiUserCircle className='text-2xl text-violet-400 text-3xl' />
        </div>
        <div className='flex flex-col ml-2 '>
          <h3 className='text-gray-500 mb-1 '> WellCome </h3>
          <p className='font-bold mb-1'>{auth.name}</p>
        </div>
      </aside>
      <div>
        {auth && (
          <button onClick={logoutHandler}>
            <BiLogOut className='text-2xl text-violet-400' />
          </button>
        )}
      </div>
    </header>
  );
};

export default Navigation;
