"use client";

import React, { createContext, useContext, useState } from "react";

interface State {
  selectedDesktop: number;
  desktops: number;
  maximized: boolean;
  spotify: number;
  vscode: number;
  firefox: number;
  files: number;
  settings: number;
}

const stateContext = createContext({});
const desktopContext = createContext({});

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<State>({
    selectedDesktop: 0,
    desktops: 2,
    maximized: false,
    spotify: -1,
    vscode: -1,
    firefox: -1,
    files: -1,
  });

  return (
    <stateContext.Provider value={{ state, setState }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(stateContext) as {
    state: State;
    setState: (state: State) => void;
  };