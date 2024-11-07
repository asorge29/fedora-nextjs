"use client";

import styles from "../styles/overview.module.css";
import { useEffect, useState } from "react";
import Desktop from "./desktop";
import { useStateContext } from "./stateProvider";
import Image from "next/image";

export default function Overview() {
  const { state, setState } = useStateContext();

  return (
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
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
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
        <Desktop key={i} id={i} />
      ))}
      <div className={styles.dock}>
        <div className={styles.dockItem}>
          <Image src="/files.svg" height={64} width={64} alt="files" />
        </div>
        <div className={styles.dockItem}>
          <Image src="/vscode.svg" height={64} width={64} alt="files" />
        </div>
        <div className={styles.dockItem}>
          <Image src="/firefox.svg" height={64} width={64} alt="files" />
        </div>
        <div className={styles.dockItem}>
          <Image src="/terminal.svg" height={64} width={64} alt="files" />
        </div>
        <div className={styles.dockItem}>
          <Image src="/spotify.svg" height={64} width={64} alt="files" />
        </div>
        <div className={styles.divider}></div>
        <div className={styles.dockItem}>All apps</div>
      </div>
    </div>
  );
}
