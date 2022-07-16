import { useState } from "react";
import { useTransActions } from "../../context/transAction/transActionsContextProvider";
import TransActionList from "../transActionList/transactionList";
import { FiMoreVertical } from "react-icons/fi";

const Modal = () => {
  const transActions = useTransActions();
  const [help, setHelp] = useState([]);
  const [isShow, setIsShow] = useState(false);

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
    <section>
      <div className='fixed bottom-10 z-20 left-4'>
        <button onClick={() => setIsShow(!isShow)}>
          <FiMoreVertical />
        </button>
      </div>
      <div
        className={`${
          isShow ? " -translate-y-80 h-full " : "opacity-0  "
        } ${" mt-5 z-10  duration-500 bg-violet-700 fixed top-96 left-0 w-full rounded-t-2xl  "}`}>
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

export default Modal;
