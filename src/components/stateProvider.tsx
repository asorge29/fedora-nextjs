"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface State {
  selectedDesktop: number;
  desktops: number;
  maximized: boolean;
}

interface DesktopState {
  id: number;
}

const stateContext = createContext({});
const desktopContext = createContext({});

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<State>({
    selectedDesktop: 0,
    desktops: 2,
    maximized: false,
  });
  const [desktopState, setDesktopState] = useState<DesktopState[]>([]);

  useEffect(() => {
    [...Array(state.desktops)].map((i) => {
      setDesktopState([...desktopState, { id: i }]);
    });
  });

  return (
    <stateContext.Provider value={{ state, setState }}>
      <desktopContext.Provider value={{ desktopState, setDesktopState }}>
        {children}
      </desktopContext.Provider>
    </stateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(stateContext) as {
    state: State;
    setState: (state: State) => void;
  };

export const useDesktopContext = () =>
  useContext(desktopContext) as {
    desktopState: [];
    setDesktopState: ([]) => void;
  };
