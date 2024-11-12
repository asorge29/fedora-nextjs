import styles from "../styles/desktop.module.css";
import {useStateContext} from "./stateProvider";
import Spotify from "./apps/spotify";
import Vscode from "./apps/vscode";
import Firefox from "./apps/firefox";
import React from "react";
import {useDroppable} from "@dnd-kit/core";


export default function Desktop({id}: { id: number }) {
  const {state, setState} = useStateContext();
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });

  const notMaximizedStyle = {
    left: `calc(50% + ${-80 * state.selectedDesktop}vw + ${id * 80}vw)`,
    backgroundImage: isOver ? 'linear-gradient(rgba(0, 128, 0, 0.6), rgba(0, 128, 0, 0.6)), url("/bg-l.webp")'  : ''
  };

  const maximizedStyle = {
    left: `calc(50% + ${-105 * state.selectedDesktop}vw + ${id * 105}vw)`,
    backgroundColor: isOver ? 'green' : undefined
  };

  const maximizeDesktop = (id: number) => {
    if (!state.maximized) {
      setState({...state, maximized: true, selectedDesktop: id});
      return;
    }
  };

  return (
    <div
      className={`${styles.desktop} ${state.maximized ? styles.maximized : styles.notMaximized} ${state.selectedDesktop !== id && !state.maximized ? styles.notSelected : null}`}
      style={state.maximized ? maximizedStyle : notMaximizedStyle}
      onClick={() => maximizeDesktop(id)}
      ref={setNodeRef}
    >
      {state.spotify === id && <Spotify/>}
      {state.vscode === id && <Vscode/>}
      {state.firefox === id && <Firefox/>}
      {state.files === id && <div>Files</div>}
      {state.settings === id && <div>Settings</div>}
    </div>
  );
}
