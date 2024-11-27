"use client";

import styles from "../styles/overview.module.css";
import Desktop from "./desktop";
import {useStateContext} from "./stateProvider";
import Image from "next/image";
import {DndContext, useSensors, useSensor, PointerSensor, DragEndEvent} from '@dnd-kit/core';

export default function Overview() {
  const {state, setState} = useStateContext();

  const openApp = (app: keyof typeof state) => {
    if (state[app] === -1) {
      setState({...state, [app]: state.selectedDesktop});
      return;
    } else if (state.selectedDesktop !== state[app]) {
      setState({...state, selectedDesktop: state[app] as number});
      return;
    } else if (state.selectedDesktop === state[app]) {
      setState({...state, maximized: true});
      return;
    }
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )
  
  const handleDragEnd = (e: DragEndEvent) => {
    if (e.over) {
      setState({...state, [e.active.id]: e.over.id, selectedDesktop: e.over.id as number});
    }
  }

  const toggleAppScreen = () => {
    setState({...state, appsScreen: !state.appsScreen})
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div
        className={`${styles.overview} ${state.maximized ? styles.maximized : styles.notMaximized}`}
      >
        <div className={styles.searchContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <form>
            <input
              type="text"
              placeholder="Type to search"
              className={styles.search}
            />
          </form>
        </div>
        {[...Array(state.desktops)].map((_, i) => (
          <Desktop key={i} id={i}/>
        ))}
        <div className={styles.appTray}>
          <div className={styles.trayItem} onClick={() => openApp("files")}>
            <Image src="/files.svg" height={96} width={96} alt="files"/>
          </div>
          <div className={styles.trayItem} onClick={() => openApp("vscode")}>
            <Image src="/vscode.svg" height={96} width={96} alt="vscode"/>
          </div>
          <div className={styles.trayItem} onClick={() => openApp("firefox")}>
            <Image src="/firefox.svg" height={96} width={96} alt="firefox"/>
          </div>
          <div className={styles.trayItem} onClick={() => openApp("terminal")}>
            <Image src="/terminal.svg" height={96} width={96} alt="terminal"/>
          </div>
          <div className={styles.trayItem} onClick={() => openApp("spotify")}>
            <Image src="/spotify.svg" height={96} width={96} alt="spotify"/>
          </div>
        </div>
        <div className={styles.dock}>
          <div className={styles.dockItem} onClick={() => openApp("files")}>
            <Image src="/files.svg" height={64} width={64} alt="files"/>
          </div>
          <div className={styles.dockItem} onClick={() => openApp("vscode")}>
            <Image src="/vscode.svg" height={64} width={64} alt="vscode"/>
          </div>
          <div className={styles.dockItem} onClick={() => openApp("firefox")}>
            <Image src="/firefox.svg" height={64} width={64} alt="firefox"/>
          </div>
          <div className={styles.dockItem} onClick={() => openApp("terminal")}>
            <Image src="/terminal.svg" height={64} width={64} alt="terminal"/>
          </div>
          <div className={styles.dockItem} onClick={() => openApp("spotify")}>
            <Image src="/spotify.svg" height={64} width={64} alt="spotify"/>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.dockItem} onClick={toggleAppScreen}>All apps</div>
        </div>
      </div>
    </DndContext>
  );
}
