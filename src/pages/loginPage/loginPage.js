import { useState } from "react";
import { useAuth, useAuthAction } from "../../context/auth/auhContextProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate() ;
  const auth = useAuth();
  const setAuth = useAuthAction();
  const [login, setLogin] = useState({
    name: "",
    email: "",
  });
  const changeHandler = (e) => {
    console.log(e.target.value);
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    setAuth(login);
    console.log(auth);
    setLogin({
      name : "" , email: ""
    })
    navigate('/')
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="my-4">
        <label className="font-semibold "> Name : </label>
        <input
          type='text'
          onChange={changeHandler}
          value={login.name}
          name='name'
          className='border-2 border-violet-400 rounded-lg px-1 outline-none w-full my-1 '
        />
      </div>
      <div >
        <label className="font-semibold " > Email : </label>
        <input
          type='email'
          onChange={changeHandler}
          value={login.email}
          name='email'
          className='border-2 border-violet-400 rounded-lg px-1 outline-none w-full my-1'
        />
      </div>
      <button className=" border-solid w-full bg-violet-400 p-2 text-indigo-50 my-2 rounded-xl"> submit </button>
    </form>
  );
};

export default LoginPage;
