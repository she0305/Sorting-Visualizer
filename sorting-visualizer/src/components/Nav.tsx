const Nav = () => {
  return (
    <nav className="w-screen bg-gray-200 grid-grid-flow-row">
      <div className="flex items-center justify-center w-full my-2 gap-4">
        <div>
          <button className="border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95">
            Merge Sort
          </button>
          <button className="border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95">
            Insertion Sort
          </button>
        </div>
        <button className="underline">Sort!</button>
      </div>
      <div className="flex flex-col items-center w-full pb-3">
        <input
          type="range"
          name="items_amount"
          id="items_amount"
          className="w-full max-w-2xl"
        />
        <input
          type="range"
          name="delay"
          id="delay"
          className="w-full max-w-2xl"
        />
      </div>
    </nav>
  );
};

export default Nav;
