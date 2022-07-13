import { useState } from "react";

const AddNewTransAction = () => {
    const[transAction, setTransAction] = useState(0)
    const transActionHandler = (e) => { 
        setTransAction(e.target.value)
    }
  return (
    <div>
      <h3>add Expense</h3>
      <form>
        <div >
          <label> amount </label>
          <input type='number' onChange={transActionHandler} />
        </div>
        <div className="flex justify-around">
          <button className="text-red-500 border border-solid border-red-500 rounded-lg p-1 outline-none"> expense </button>
          <button className="text-green-500 border border-solid border-green-500 rounded-lg p-1 outline-none"> income </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewTransAction;
