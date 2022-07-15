import { Link } from "react-router-dom";
import Home from "../../Components/home/home";
import { useAuth } from "../../context/auth/auhContextProvider";
import { useTransActions } from "../../context/transAction/transActionsContextProvider";

const HomePage = () => {
  const auth = useAuth();
  const transActions = useTransActions();
  return (
    <section>
      {auth ? <Home /> : <Link to='/login'> dont Login yet ?</Link>}
      <div className='flex justify-between my-1'>
        <h2> transAction</h2>
        <p> view all </p>
      </div>
      <div>
        {transActions &&
          transActions.map((transAction) => (
            <section key={transAction.id}
              className={`${
                transAction.type === "expense"
                  ? "text-red-400 border border-red-500"
                  : "text-green-500 border border-green-500"
              } ${"rounded-lg my-2"}`}>
              <ul className='flex justify-between mx-1'>
                <li> {transAction.title} </li>
                <ul className='my-1 self-end'>
                  <li> {transAction.amount} </li>
                  <li> {transAction.date} </li>
                </ul>
              </ul>
            </section>
          ))}
      </div>
    </section>
  );
};

export default HomePage;
