import { createContext, useEffect, useState } from "react";
import { getInsertionSortAnims } from "./insertionSort";

interface Settings {
  algoType: Algo;
  arrayLen: number;
  delay: number;
}

export type Algo = "merge sort" | "insertion sort";
interface Props {
  children: React.ReactNode;
}

const initVals: Settings = {
  algoType: "merge sort",
  arrayLen: 25,
  delay: 15,
};

type SettingsContext = {
  settings: Settings;
  setSettings?: React.Dispatch<React.SetStateAction<Settings>>;
  sort: (algoType: Algo) => void;
};

export const Context = createContext<SettingsContext>({
  settings: initVals,
  sort: (algoType) => {},
});

type Items = {
  items: number[];
  setItems?: React.Dispatch<React.SetStateAction<number[]>>;
};
export const ItemsContext = createContext<Items>({ items: [] });

const AlgoContext: React.FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initVals);
  const [items, setItems] = useState<number[]>([]); //inital as empty array

  useEffect(() => {
    const ranNums = [];
    for (let i = 0; i < settings.arrayLen; i++) {
      ranNums.push(Math.floor(Math.random() * 540));
    }
    setItems(ranNums);
    console.log(items);
  }, [settings.arrayLen]);

  const sort = (algoType: Algo) => {
    switch (algoType) {
      case "insertion sort":
        const { newArr, animArr } = getInsertionSortAnims(items);
        animateDivs(newArr, animArr);
        console.log(animArr);
        break;
      case "merge sort":
        break;
      default:
        break;
    }
  };

  const animateDivs = (newArr: number[], arr: number[][]) => {
    arr.forEach(([first, second], idx) => {
      const div = document.getElementById(`${first}`);
      const div2 = document.getElementById(`${second}`);
      if (!div || !div2) return;
      setTimeout(() => {
        div.style.backgroundColor = "#b041f0"
        div2.style.backgroundColor = "#b041f0";
        const divHeight = div.style.height;
        div.style.height = div2.style.height;
        div2.style.height= divHeight;
        // setTimeout(() => {
        //   div.style.backgroundColor = "#482"
        //   div2.style.backgroundColor = "#482";
        //   if (idx === arr.length-1) {
        //     setItems(newArr);
        //   }
        // }, settings.delay * 3)
      }, settings.delay * idx * 3);


    });
  };

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      <Context.Provider value={{ sort, settings, setSettings }}>
        {children}
      </Context.Provider>
    </ItemsContext.Provider>
  );
};

export default AlgoContext;
