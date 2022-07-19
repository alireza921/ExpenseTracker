import { useLocation, useNavigate } from "react-router-dom";
import {
  useTransActions,
  useTransActionsAction,
} from "../../context/transAction/transActionsContextProvider";

const TransAction = () => {
  const location = useLocation();
  const transAction = location.state;

  const navigate = useNavigate();

  const transActions = useTransActions();
  const setTransAction = useTransActionsAction();

  const deleteHandler = (id) => {
    console.log(id);
    const filteredTransAction = transActions.filter(
      (transAction) => transAction.id !== id
    );
    setTransAction(filteredTransAction);
    navigate("/");
  };
  const editHandler = (id) => {
    console.log(id);
  };
  return (
    <section
      className={`${
        transAction.type === "expense" ? "border-red-400" : "border-green-400"
      } ${"flex - justify-between  bg-violet-100  text-blue-800 font-semibold border border-solid rounded-xl py-4 px-1 my-3"}`}>
      <ul className='flex flex-col  items-strat  justify-center '>
        <li className='m-1'> Date : {transAction.date} </li>
        <li className='m-1'> Title : {transAction.title} </li>
        <li className='m-1'> Amount : {transAction.amount} </li>
        <li className='m-1'> Type : {transAction.type} </li>
        <li className='m-1'> Describtion : {transAction.desc} </li>
      </ul>
      <article className='flex flex-col ml-4 p-4 '>
        <button
          onClick={() => deleteHandler(transAction.id)}
          className='px-4 py-2 bg-violet-800 text-violet-200  my-2 rounded-lg'>
          delete
        </button>
        <button
          onClick={() => editHandler(transAction.id)}
          className='px-4 py-2 bg-violet-800 text-violet-200  my-2 rounded-lg'>
          Edit
        </button>
      </article>
    </section>
  );
};

export default TransAction;
