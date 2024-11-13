import styles from "@/styles/settings.module.css";
//import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import React from "react";
import { useStateContext } from "../stateProvider";

export default function Settings() {
  const { state, setState } = useStateContext();
  // const [selected, setSelected] = useState();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "settings",
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const closeApp = () => {
    setState({ ...state, settings: -1 });
  };

  return (
    <div
      className={styles.window}
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <div className={styles.container} onClick={closeApp}>
        <div className={styles.sections}>
          <div className={styles.section}>Background</div>
          <div className={styles.section}></div>
          <div className={styles.section}></div>
          <div className={styles.section}></div>
          <div className={styles.section}></div>
          <div className={styles.section}></div>
          <div className={styles.section}></div>
        </div>
        <div className={styles.test}></div>
      </div>
    </div>
  );
}
