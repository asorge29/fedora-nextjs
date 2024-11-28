"use client";

import { useEffect, useRef } from "react";
import styles from "../styles/fedora.module.css";
import { useStateContext } from "./stateProvider";
import Overview from "./overview";
import TopBar from "./topBar";

export default function Fedora() {
  const { state, setState } = useStateContext();
  const lastScroll = useRef<number>(0);
  //const totalDeltaX = useRef<number>(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      const now = Date.now()

      lastScroll.current = now

      if (e.ctrlKey) {
        if (e.deltaY > 0) {
          setState({ ...state, maximized: false });
        } else {
          setState({ ...state, maximized: true });
        }
      } else if (e.shiftKey) {
        if (e.deltaY > 5 && state.selectedDesktop < state.desktops - 1) {
          setState({ ...state, selectedDesktop: state.selectedDesktop + 1 });
        }
        if (e.deltaY < -5 && state.selectedDesktop > 0) {
          setState({ ...state, selectedDesktop: state.selectedDesktop - 1 });
        }
      } else {
        if (e.deltaY > 5 && !state.appsScreen && !state.maximized) {
          setState({ ...state, appsScreen: true });
        } else if (e.deltaY < -5 && state.appsScreen && !state.maximized) {
          setState({ ...state, appsScreen: false });
        } else if (e.deltaX !== 0) {
          if (e.deltaX > 5 && state.selectedDesktop < state.desktops - 1) {
            setState({ ...state, selectedDesktop: state.selectedDesktop + 1 });
          }
          if (e.deltaX < -5 && state.selectedDesktop > 0) {
            setState({ ...state, selectedDesktop: state.selectedDesktop - 1 });
          }
        }
      };
    }

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [state, setState]);

  return (
    <div className={styles.screen}>
      <TopBar />
      <Overview />
    </div>
  );
}
