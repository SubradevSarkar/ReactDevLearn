// eslint-disable-next-line react/prop-types
const Card = ({ name, btnTxt = "view more", imgType }) => {
  return (
    <div className="max-w-md mx-auto my-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={imgType}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {name}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Incredible accommodation for your team
          </a>
          <p className="mt-2 text-slate-500">
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>

          <button className="mt-5 py-1 px-4 rounded text-slate-50 bg-violet-700">
            {btnTxt}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
