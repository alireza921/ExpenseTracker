import { useEffect, useState } from "react";
import { useTransActions } from "../../context/transAction/transActionsContextProvider";

const Home = () => {
  const [expense, setExpense] = useState(0);
  const [incom, setIncom] = useState(0);

  const transActions = useTransActions();

  useEffect(() => {
    console.log(transActions);
    let inc = 0;
    let exp = 0;
    transActions.map((transAction) => {
      if (transAction.type === "expense") {
        console.log(transAction.type);
        exp = exp + parseFloat(transAction.amount);
      } else {
        inc = inc + parseFloat(transAction.amount);
      }
      setExpense(exp);
      setIncom(inc);
    });
  }, []);

  return (
    <main className='border-solid border-violet-400 border-2 rounded-xl py-4 px-1 my-3 '>
      <h2> Totall balanse </h2>
      <h2> adad darim k dynamic am hast</h2>
      <div>
        <div> icon </div>
        <div>
          <p> income </p>
          <p>{incom}</p>
        </div>
      </div>
      <div>
        <div> icon </div>
        <div>
          <p> expense </p>
          <p> {expense}</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
