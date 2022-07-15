import { useLocation, useParams } from "react-router-dom";
import { useTransActions } from "../../context/transAction/transActionsContextProvider";

const TransAction = () => {
  const location = useLocation();
  console.log(location.state);
  const transAction = location.state;
  const params = useParams();
  console.log(params.id);

  return (
    <ul className={`${transAction.type === 'expense' ? 'border-red-400' : 'border-green-400'} ${'flex flex-col  items-strat  justify-center  bg-violet-100  text-blue-800 font-semibold border border-solid rounded-xl py-4 px-1 my-3'} `}  >
      <li className='m-1'> Date : {transAction.date} </li>
      <li className='m-1'> Title : {transAction.title} </li>
      <li className='m-1'> Amount : {transAction.amount} </li>
      <li className='m-1'> Type : {transAction.type} </li>
      <li className='m-1'> Describtion : {transAction.desc} </li>
    </ul>
  );
};

export default TransAction;
