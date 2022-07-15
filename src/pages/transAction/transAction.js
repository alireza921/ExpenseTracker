import { useLocation, useParams } from "react-router-dom";
import { useTransActions } from "../../context/transAction/transActionsContextProvider";

const TransAction = () => {
  const location = useLocation();
  console.log(location.state);
  const transAction = location.state ;
  const params = useParams();
  console.log(params.id);

  return <div>
    <p> {transAction.date} </p>
    <p> {transAction.amount} </p>
    <p> {transAction.title} </p>
    <p> {transAction.desc} </p>
    <p> {transAction.type} </p>


  </div>;
};

export default TransAction;
