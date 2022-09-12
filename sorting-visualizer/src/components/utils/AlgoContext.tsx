import { createContext, useState } from "react";

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
};

export const Context = createContext<SettingsContext>({
  settings: initVals,
});

const AlgoContext: React.FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initVals);
  return (
    <Context.Provider value={{ settings, setSettings }}>
      {children}
    </Context.Provider>
  );
};

export default AlgoContext;
