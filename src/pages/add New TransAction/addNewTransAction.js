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
    type: "",
  });
  const formValueHandler = (e) => {
    setFormValue(e.target.value);
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
    <div>
      <h3> Add TransAction </h3>
      <form onSubmit={submitformValueHandler}>
        <div>
          <label> date : </label>
          <input
            type='date'
            name='date'
            value={formValue.date}
            onChange={formValueHandler}
          />
        </div>
        <div>
          <label> Title </label>
          <input
            type='text'
            name='title'
            value={formValue.title}
            onChange={formValueHandler}
          />
        </div>
        <div>
          <label> amount </label>
          <input
            type='number'
            onChange={formValueHandler}
            name='amount'
            value={formValue.amount}
          />
        </div>
        <div>
          <label>describtion </label>
          <textarea
            name='desc'
            value={formValue.desc}
            onChange={formValueHandler}
          />
        </div>
        <div className='flex justify-around'>
          <div>
            <label> Expense </label>
            <input
              type='radio'
              value='expense'
              name='type'
              onChange={formValueHandler}
              checked={formValue.type === "expense"}
            />
          </div>
          <div>
            <label>Incom</label>
            <input
              type='radio'
              value='incom'
              name='type'
              onChange={formValueHandler}
              checked={formValue.type === "incom"}
            />
          </div>
          <button type='submit'> add </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewTransAction;
