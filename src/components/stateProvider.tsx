"use client";

import React, { createContext, useContext, useState } from "react";

interface State {
  selectedDesktop: number;
  desktops: number;
  maximized: boolean;
}

 export type DesktopState = {
  spotifyOpen: boolean;
  firefoxOpen: boolean;
  filesOpen: boolean;
  settingsOpen: boolean;
  vscodeOpen: boolean;
}

const stateContext = createContext({});
const desktopContext = createContext({});

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<State>({
    selectedDesktop: 0,
    desktops: 2,
    maximized: false,
  });
  const [desktopState, setDesktopState] = useState<DesktopState[]>([
    {
      spotifyOpen: false,
      firefoxOpen: false,
      filesOpen: false,
      settingsOpen: false,
      vscodeOpen: false,
    },
    {
      spotifyOpen: false,
      firefoxOpen: false,
      filesOpen: false,
      settingsOpen: false,
      vscodeOpen: false,
    }
  ]);
  
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
    desktopState: DesktopState[];
    setDesktopState: (state: DesktopState[]) => void;
  };