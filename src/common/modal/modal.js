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
    <section className="p-4">
      <div className='fixed bottom-10 z-20 left-4'>
        <button onClick={() => setIsShow(!isShow)}>
          <FiMoreVertical />
        </button>
      </div>
      <div
        className={`${
          isShow ? " -translate-y-80 h-full " : " opacity-0  "
        } ${" mt-5 z-10 p-2  duration-500 bg-violet-200 fixed top-96 left-0 w-full rounded-t-2xl  "}`}>
        <header className="flex justify-around m-2 p-2   ">
          <button className="bg-red-400 text-blue-800  font-medium  p-2     rounded-lg  "  onClick={expenseHandler}> expense </button>
          <button className="bg-green-400 text-blue-800 font-medium p-2   rounded-lg  "  onClick={incomHandler}> incom </button>
        </header>
        <main>
          <TransActionList transActions={help} isShow={isShow} />
        </main>
      </div>
    </section>
  );
};

export default Modal;
