import { useEffect, useState } from "react";
import { useTransActions } from "../../context/transAction/transActionsContextProvider";
import TransActionList from "../../common/transActionList/transactionList";
import Overview from "../overView/overView";
import Modal from "../../common/modal/modal";
const Home = () => {
  const [expense, setExpense] = useState(0);
  const [incom, setIncom] = useState(0);
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

  return (
    <div className="overflow-hidden">
      <section>
        <Overview incom={incom} expense={expense} />
        <TransActionList transActions={transActions} />
      </section>
      <div  className=' overflow-hidden '>
        <Modal />
      </div>
    </div>
  );
};

export default Home;
