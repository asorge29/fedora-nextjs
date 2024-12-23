import styles from "../styles/desktop.module.css";
import {useStateContext} from "./stateProvider";
import Spotify from "./apps/spotify";
import Vscode from "./apps/vscode";
import Firefox from "./apps/firefox";
import React from "react";
import {useDroppable} from "@dnd-kit/core";
import Settings from "./apps/settings";


export default function Desktop({id}: { id: number }) {
  const {state, setState} = useStateContext();
  const {setNodeRef} = useDroppable({
    id: id,
  });

  const notMaximizedStyle = {
    left: `calc(50% + ${-84.3743 * state.selectedDesktop}vw + ${id * 84.3743}vw)`
  };

  const maximizedStyle = {
    left: `calc(50% + ${-105 * state.selectedDesktop}vw + ${id * 105}vw)`
  };
  
  const appScreenStyle = {
    left: `calc(50% + ${id * 280}px - ${140 *( state.desktops - 1)}px)`
  };

  const maximizeDesktop = (id: number) => {
    if (!state.maximized) {
      setState({...state, maximized: true, selectedDesktop: id, appsScreen: false});
      return;
    }
  };

  return (
    <div
      className={`${styles.wrapper} ${state.maximized ? styles.maximized : state.appsScreen? state.selectedDesktop === id ? styles.appTrayOpenSelected : styles.appTrayOpen : styles.notMaximized} ${state.selectedDesktop !== id && !state.maximized ? styles.notSelected : null}`}
      style={state.maximized ? maximizedStyle : state.appsScreen ? appScreenStyle : notMaximizedStyle}
    >
      <div
        className={`${styles.desktop} ${state.maximized ? styles.maximizedDesktop : state.appsScreen? styles.appTrayOpenDesktop : styles.notMaximizedDesktop}`}
        style={{backgroundImage: `url('/backgrounds/${state.background}-${state.scheme}.webp')`}}
        onClick={() => maximizeDesktop(id)}
        ref={setNodeRef}
      >
        {state.spotify === id && <Spotify/>}
        {state.vscode === id && <Vscode/>}
        {state.firefox === id && <Firefox/>}
        {state.files === id && <div>Files</div>}
        {state.settings === id && <Settings />}
      </div>
    </div>
      );
      }
