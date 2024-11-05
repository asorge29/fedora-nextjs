"use client";

import { useEffect, useState } from "react";
import styles from "../styles/fedora.module.css";
import { StateProvider, useStateContext } from "./stateProvider";
import Overview from "./overview";
import TopBar from "./topBar";

export default function Fedora() {
  const { state, setState } = useStateContext();

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY > 0) {
          setState({ ...state, maximized: false });
        } else {
          setState({ ...state, maximized: true });
        }
      }
      if (e.deltaX !== 0) {
        e.preventDefault();
      }
      if (e.deltaX > 5 && state.selectedDesktop < state.desktops - 1) {
        e.preventDefault();
        setState({ ...state, selectedDesktop: state.selectedDesktop += 1 });
      }
      if (e.deltaX < -5 && state.selectedDesktop > 0) {
        e.preventDefault();
        setState({ ...state, selectedDesktop: state.selectedDesktop -= 1 });
      }
    }, {passive: false});
  }, []);

  return (
    <div className={styles.screen}>
      <TopBar />
      <div></div>
      <Overview />
    </div>
  );
}
