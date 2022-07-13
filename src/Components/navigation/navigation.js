import { useAuth, useAuthAction } from "../../context/auth/auhContextProvider";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";

const Navigation = () => {
  const auth = useAuth();
  const setAuth = useAuthAction();
  const navigate = useNavigate();
  const logoutHandler = () => {
    alert("do you want to logout ? ");
    setAuth(false);
    navigate("/");
  };

  return (
    <header className='flex  justify-between items-center '>
      <aside className='flex  justify-start items-center'>
        <div>
          <BiUserCircle className='text-2xl text-violet-400 ' />
        </div>
        <div className='flex flex-col ml-3 '>
          <h3 className='text-gray-500 mb- '> WellCome </h3>
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
