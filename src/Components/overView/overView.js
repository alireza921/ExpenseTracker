const Overview = ({ incom, expense }) => {
  return (
    <main className='border-solid border-violet-400 border-2 bg-gray-300 rounded-xl py-4 px-1 my-3 '>
      <h2> balanse : {incom - expense} </h2>
      <h2> adad darim k dynamic am hast</h2>
      <div>
        <div> icon </div>
        <div>
          <p> income </p>
          <p>{incom}</p>
        </div>
      </div>
      <div>
        <div> icon </div>
        <div>
          <p> expense </p>
          <p> {expense}</p>
        </div>
      </div>
    </main>
  );
};
export default Overview;
