import { Link } from "react-router-dom";

const TransActionList = ({ transActions , isShow }) => {
  console.log(isShow);
  return (
    <main>
      <div className='flex justify-between my-1'>
        <h2 className='font-bold text-blue-800 text-2xl'> TransActions </h2>
      </div>
      <div className={`${!isShow && ' max-h-44 overflow-scroll ' }`}>
        {transActions &&
          transActions.map((transAction) => (
            <Link
              to={`/transaction/${transAction.id}`}
              state={transAction}
              key={transAction.id}>
              <section
                className={`${
                  transAction.type === "expense"
                    ? "text-red-400 border border-red-500"
                    : "text-green-500 border border-green-500"
                } ${"rounded-lg my-2"}`}>
                <ul className='flex justify-between mx-1'>
                  <li> {transAction.title} </li>
                  <ul className='my-1 self-end'>
                    <li> {transAction.date} </li>
                    <li> {transAction.amount} </li>
                  </ul>
                </ul>
              </section>
            </Link>
          ))}
      </div>
    </main>
  );
};

export default TransActionList;
