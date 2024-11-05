'use client';

import styles from "../styles/overview.module.css";
import {useEffect, useState} from "react";
import Desktop from "./desktop";
import {useStateContext} from "./stateProvider";

export default function Overview() {

  const {state, setState} = useStateContext();

  return (
    <div className={`${styles.overview} ${state.maximized ? styles.maximized : styles.notMaximized}`}>
      {[...Array(state.desktops)].map((_, i) => (
        <Desktop key={i} id={i} />
      ))}    </div>
  );
}