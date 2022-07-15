import { useEffect, useState } from "react";
import { useTransActions } from "../../context/transAction/transActionsContextProvider";
import { Link } from "react-router-dom";
import TransActionList from "../transActionList/transactionList";
import Overview from "../overView/overView";

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
    <section>
      <Overview incom={incom} expense={expense} />
      <TransActionList transActions={transActions} />
    </section>
  );
};

export default Home;

