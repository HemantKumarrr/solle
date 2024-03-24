const GameCard = ({ gameName}) => {

  return (
    <div>
      <div className={`w-72 bg-white rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md`}>
        <p className="text-lg font-bold font-sans">{gameName}</p>
        <div className="py-3">
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni natus
            rerum deleniti eaque ...
          </p>
        </div>
        <div className="flex justify-between">
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
          <div className="text-sm flex gap-2">
            <button className="bg-slate-200 px-2 rounded-xl hover:bg-cyan-500 transition-colors ease-in-out">
              Join
            </button>
            <button className="bg-slate-200 py-1 text-md px-2 rounded-xl hover:bg-green-400 transition-colors ease-in-out">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
