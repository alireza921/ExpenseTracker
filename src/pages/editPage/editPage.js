import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useTransActions,
  useTransActionsAction,
} from "../../context/transAction/transActionsContextProvider";

const EditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const transAction = location.state;

  const setTransActions = useTransActionsAction();
  const transActions = useTransActions();

  const [formValue, setFormValue] = useState({
    date: transAction.date,
    title: transAction.title,
    amount: transAction.amount,
    desc: transAction.amount,
    type: transAction.type,
  });
  const formValueHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const submitformValueHandler = (e) => {
    e.preventDefault();
    const index = transActions.findIndex((t) => t.id === transAction.id);
    console.log(index);
    const updateTransAction = [...transActions];
    updateTransAction[index] = formValue;
    setTransActions(updateTransAction);
    navigate("/");
  };
  return (
    <section>
      Edit Page
      <div className=' bg-violet-200 py-1  px-2 rounded-lg my-1 '>
        <h3 className='font-bold my-2 text-blue-800 text-center'>
          Add TransAction
        </h3>
        <form
          onSubmit={submitformValueHandler}
          className='flex flex-col items-start mx-1 pt-2'>
          <div className=' my-1 flex justify-around    items-center'>
            <label className='w-24 '> date : </label>
            <input
              className='px-2 outline-none   rounded-lg focus:border-2 border-solid border-violet-800'
              type='date'
              name='date'
              value={formValue.date}
              onChange={formValueHandler}
            />
          </div>
          <div className=' my-1 flex justify-around   items-center '>
            <label className='w-24 '> Title </label>
            <input
              className='px-2 outline-none   rounded-lg focus:border-2 border-solid border-violet-800'
              type='text'
              name='title'
              value={formValue.title}
              onChange={formValueHandler}
            />
          </div>
          <div className=' my-1 flex justify-around  items-center '>
            <label className='w-24 '> amount </label>
            <input
              className='px-2 outline-none   rounded-lg focus:border-2 border-solid border-violet-800'
              type='number'
              onChange={formValueHandler}
              name='amount'
              value={formValue.amount}
            />
          </div>
          <div className=' my-1 flex justify-around   items-center'>
            <label className='w-24 '>describtion </label>
            <textarea
              className='px-2 outline-none   rounded-lg focus:border-2 border-solid border-violet-800'
              name='desc'
              value={formValue.desc}
              onChange={formValueHandler}
            />
          </div>

          <footer className='w-full flex  flex-col justify-around'>
            <div className='my-1'>
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
            <div className='my-1'>
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

            <button
              type='submit'
              className=' bg-violet-800 px-3 py-1 rounded-lg text-violet-200 my-2 self-center'>
              Edit TransAction
            </button>
          </footer>
        </form>
      </div>
    </section>
  );
};

export default EditPage;
