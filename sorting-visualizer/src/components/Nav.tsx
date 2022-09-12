import { useContext } from "react";
import AlgoContext, { Context, Algo } from "./utils/AlgoContext";

const Nav = () => {
  const { settings, setSettings } = useContext(Context);

  const onArrayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!setSettings) return;
    // c (previous setting?)
    // e (event)
    setSettings((c) => ({ ...c, arrayLen: +e.target.value * 5 }));
    console.log(settings.arrayLen);
  };
  const onDelayChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, delay: +e.target.value * 5 }));
  };

  const onAlgoChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    type: Algo
  ) => {
    if (!setSettings) return;
    setSettings((c) => ({ ...c, algoType: type }));
    console.log(settings.algoType); //shows previous algorithem
  };

  return (
    <nav className="w-screen bg-gray-200 grid-grid-flow-row">
      <div className="flex items-center justify-center w-full my-2 gap-4">
        <div>
          <button
            className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
              settings.algoType === "merge sort" && "text-purple-500"
            }`}
            onClick={(e) => onAlgoChange(e, "merge sort")}
          >
            Merge Sort
          </button>
          <button
            className={`border border-teal-100 shadow-md py-2 px-4 transition-all active:scale-95 ${
                settings.algoType === "insertion sort" && "text-purple-500"
            }`}
            onClick={(e) => onAlgoChange(e, "insertion sort")}
          >
            Insertion Sort
          </button>
        </div>
        <button className="underline">Sort!</button>
      </div>
      <div className="flex flex-col items-center w-full pb-3">
        <label htmlFor="items_amount"> Array Length: {settings.arrayLen}</label>
        <input
          type="range"
          name="items_amount"
          id="items_amount"
          className="w-full max-w-2xl"
          defaultValue={25}
          min={1}
          onChange={onArrayChange}
        />
        <label htmlFor="delay"> Delay: {settings.delay}</label>
        <input
          type="range"
          name="delay"
          id="delay"
          className="w-full max-w-2xl"
          defaultValue={15}
          min={1}
          onChange={onDelayChange}
        />
      </div>
    </nav>
  );
};

export default Nav;
