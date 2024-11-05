'use client';

import React, { createContext, useContext, useState } from "react";

const stateContext = createContext({});

export const StateProvider = ({children} : {children: React.ReactNode}) => {
  const [state, setState] = useState(
    {
      selectedDesktop: 0,
      desktops: 2,
      maximized: false
    }
  );

  return (
    <stateContext.Provider value={{state, setState}}>
      {children}
    </stateContext.Provider>
  );

}

export const useStateContext = () => useContext(stateContext) as {
  state: any;
  setState: (state: any) => void;
};