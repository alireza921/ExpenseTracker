import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const Overview = ({ incom, expense }) => {

  return (
    <main className='flex flex-col items-center justify-center border-solid bg-violet-100  text-blue-800 font-semibold rounded-xl py-4 px-1 my-3 '>
      <h2 className='my-4'> Total Balanse </h2>
      <h2 className='font-bold text-3xl mb-4'> $ {incom - expense}</h2>
      <div className='flex items-center justify-between px-4 w-full md:w-96'>

        <div className='flex  justify-center items-center '>
          <div className='mr-2 text-xl  font-medium text-green-400 bg-white p-2  rounded-full'>
            <AiOutlineArrowDown />
          </div>
          <div>
            <p> income </p>
            <p> {incom} $ </p>
          </div>
        </div>
        <div className='flex  justify-center items-center '>
          <div className='mr-2 text-xl  font-medium text-red-400 bg-white p-2  rounded-full'>
            <AiOutlineArrowUp />
          </div>
          <div>
            <p> expense </p>
            <p> {expense}</p>
          </div>
        </div>

      </div>
    </main>
  );
};
export default Overview;
