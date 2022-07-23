import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useTransActions,
  useTransActionsAction,
} from "../../context/transAction/transActionsContextProvider";

const AddNewTransAction = () => {
  const navigate = useNavigate();
  const transActions = useTransActions();
  const setTransActions = useTransActionsAction();
  const [formValue, setFormValue] = useState({
    date: "",
    title: "",
    amount: "",
    desc: "",
    type: "expense",
  });
  const formValueHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const submitformValueHandler = (e) => {
    e.preventDefault();
    setTransActions([...transActions, { ...formValue, id: Date.now() }]);
    setFormValue({
      date: "",
      title: "",
      amount: "",
      desc: "",
      type: "",
    });
    navigate("/");
  };

  return (
    <div className=' bg-violet-200 py-1  px-2 rounded-lg my-1 '>
      <h3 className='font-bold my-2 text-blue-800 text-center'> Add TransAction </h3>
      <form
        onSubmit={submitformValueHandler}
        className='flex flex-col items-start mx-1 pt-2 md:items-center '>
        <div className=' my-1 flex justify-around    items-center'>
          <label className='w-24  '> date : </label>
          <input
            className='w-40 px-2 outline-none   rounded-lg focus:border-2 border-solid border-violet-800 md:w-64'
            type='date'
            name='date'
            value={formValue.date}
            onChange={formValueHandler}
          />
        </div>
        <div className=' my-1 flex justify-around   items-center '>
          <label className='w-24  '> Title </label>
          <input
            className=' w-40  px-2 outline-none   rounded-lg focus:border-2 border-solid border-violet-800 md:w-64'
            type='text'
            name='title'
            value={formValue.title}
            onChange={formValueHandler}
          />
        </div>
        <div className=' my-1 flex justify-around  items-center '>
          <label className='w-24  '> amount </label>
          <input
            className=' w-40  px-2 outline-none   rounded-lg focus:border-2 border-solid border-violet-800 md:w-64'
            type='number'
            onChange={formValueHandler}
            name='amount'
            value={formValue.amount}
          />
        </div>
        <div className=' my-1 flex justify-around   items-center'>
          <label className='w-24  '>describtion </label>
          <textarea
            className=' w-40  px-2 outline-none   rounded-lg focus:border-2 border-solid border-violet-800 md:w-64'
            name='desc'
            value={formValue.desc}
            onChange={formValueHandler}
          />
        </div>

        <div className='w-full flex  flex-col justify-around md:flex-row md:w-44 md:items-center'>
          <div className="my-1">
            <input
              id='expense'
              type='radio'
              value='expense'
              name='type'
              onChange={formValueHandler}
              checked={formValue.type === "expense"}
            />
            <label htmlFor='expense'> Expense </label>
          </div>
          <div className="">
            <input
              id='incom'
              type='radio'
              value='incom'
              name='type'
              onChange={formValueHandler}
              checked={formValue.type === "incom"}
            />
            <label htmlFor='incom'> Incom</label>
          </div>

         
        </div>
        <button type='submit' className=' bg-violet-800 px-3 py-1 rounded-lg text-violet-200 my-2 self-center'>
            Add New TransAction
          </button>
      </form>
    </div>
  );
};

export default AddNewTransAction;
