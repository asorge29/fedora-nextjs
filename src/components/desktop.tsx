import styles from "../styles/desktop.module.css";
import { useStateContext, useDesktopContext } from "./stateProvider";
import Spotify from "./apps/spotify";
import Vscode from "./apps/vscode";
import Firefox from "./apps/firefox";
import React from "react";
import {useDroppable} from "@dnd-kit/core";


export default function Desktop({ id }: { id: number }) {
  const { state, setState } = useStateContext();
  const { desktopState } = useDesktopContext();
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });


  const notMaximizedStyle = {
    left: `calc(50% + ${-80 * state.selectedDesktop}vw + ${id * 80}vw)`,
    backgroundColor: isOver ? 'green' : undefined
  };

  const maximizedStyle = {
    left: `calc(50% + ${-105 * state.selectedDesktop}vw + ${id * 105}vw)`,
    backgroundColor: isOver ? 'green' : undefined
  };

  const maximizeDesktop = () => {
    if (!state.maximized) {
      setState({ ...state, maximized: true });
      return;
    }
  };

  return (
    <div
      className={`${styles.desktop} ${state.maximized ? styles.maximized : styles.notMaximized} ${state.selectedDesktop !== id && !state.maximized ? styles.notSelected : null}`}
      style={state.maximized ? maximizedStyle : notMaximizedStyle}
      onClick={maximizeDesktop}
      ref={setNodeRef}
    >
     {desktopState[id].spotifyOpen ? <Spotify /> : null}
     {desktopState[id].vscodeOpen ? <Vscode /> : null}
     {desktopState[id].firefoxOpen ? <Firefox /> : null}
    </div>
  );
}
