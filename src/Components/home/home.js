import { useEffect, useState } from "react";
import { useTransActions } from "../../context/transAction/transActionsContextProvider";
import TransActionList from "../../common/transActionList/transactionList";
import Overview from "../overView/overView";
import { FiMoreVertical } from "react-icons/fi";
import "./home.css";
const Home = () => {
  const [expense, setExpense] = useState(0);
  const [incom, setIncom] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [help, setHelp] = useState([]);
  const transActions = useTransActions();

  useEffect(() => {
    let inc = 0;
    let exp = 0;
    transActions.map((transAction) => {
      if (transAction.type === "expense") {
        exp = exp + parseFloat(transAction.amount);
      } else {
        inc = inc + parseFloat(transAction.amount);
      }
      setExpense(exp);
      setIncom(inc);
    });
  }, []);

  const expenseHandler = () => {
    const filteredExpense = transActions.filter(
      (transAction) => transAction.type === "expense"
    );
    setHelp(filteredExpense);
  };

  const incomHandler = () => {
    const filteredExpense = transActions.filter(
      (transAction) => transAction.type === "incom"
    );
    setHelp(filteredExpense);
  };

  return (
    <section className=' overflow-hidden '>
      <Overview incom={incom} expense={expense} />
      <TransActionList transActions={transActions} />
      <div className='fixed bottom-10 left-4 z-10'>
        <button onClick={() => setIsShow(!isShow)}> <FiMoreVertical /> </button>
      </div>
      <div
        className={`${
          isShow ? " -translate-y-80 h-full " : "opacity-0  "
        } ${" mt-5  duration-500 bg-violet-700 absolute left-0 w-full rounded-t-2xl   "}`}>
        <header>
          <button onClick={expenseHandler}> expense </button>
          <button onClick={incomHandler}> incom </button>
        </header>
        <main>
          <TransActionList transActions={help} />
        </main>
      </div>
    </section>
  );
};

export default Home;
