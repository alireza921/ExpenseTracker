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
      <div>
        <label> Name : </label>
        <input
          type='text'
          onChange={changeHandler}
          value={login.name}
          name='name'
          className='border-2 border-gray-400'
        />
      </div>
      <div>
        <label> Email </label>
        <input
          type='email'
          onChange={changeHandler}
          value={login.email}
          name='email'
          className='border-2 border-gray-400'
        />
      </div>
      <button> submit </button>
    </form>
  );
};

export default LoginPage;
