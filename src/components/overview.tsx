"use client";

import styles from "../styles/overview.module.css";
import Desktop from "./desktop";
import {DesktopState, useDesktopContext, useStateContext} from "./stateProvider";
import Image from "next/image";
import {DndContext} from '@dnd-kit/core';

export default function Overview() {
  const {state} = useStateContext();
  const {desktopState, setDesktopState} = useDesktopContext();

  const openApp = (id: number, app: string) => {
    const updatedDesktop = {
      ...desktopState[id],
      [`${app}Open`]: !desktopState[id]?.[`${app}Open` as keyof DesktopState],
    };

    setDesktopState([...desktopState.slice(0, id), updatedDesktop as DesktopState, ...desktopState.slice(id + 1)]);
  };
  
  const handleDragEnd = (e: object) => {
    console.log(e.over);
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
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
        <div className={styles.dock}>
          <div className={styles.dockItem} onClick={() => openApp(state.selectedDesktop, "files")}>
            <Image src="/files.svg" height={64} width={64} alt="files"/>
          </div>
          <div className={styles.dockItem} onClick={() => openApp(state.selectedDesktop, "vscode")}>
            <Image src="/vscode.svg" height={64} width={64} alt="vscode"/>
          </div>
          <div className={styles.dockItem} onClick={() => openApp(state.selectedDesktop, "firefox")}>
            <Image src="/firefox.svg" height={64} width={64} alt="firefox"/>
          </div>
          <div className={styles.dockItem} onClick={() => openApp(state.selectedDesktop, "terminal")}>
            <Image src="/terminal.svg" height={64} width={64} alt="terminal"/>
          </div>
          <div className={styles.dockItem} onClick={() => openApp(state.selectedDesktop, "spotify")}>
            <Image src="/spotify.svg" height={64} width={64} alt="spotify"/>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.dockItem}>All apps</div>
        </div>
      </div>
    </DndContext>
  );
}
