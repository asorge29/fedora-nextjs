import styles from "@/styles/settings.module.css";
import { useState, useEffect } from "react";
import { useDraggable } from "@dnd-kit/core";
import React from "react";
import { useStateContext } from "../stateProvider";
import Image from "next/image";

export default function Settings() {
  const { state, setState } = useStateContext();
  const [selected, setSelected] = useState("");

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
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div>Search</div>
          <div>Settings</div>
          <div>Hamburger</div>
        </div>
        <div className={styles.headerRight} onClick={closeApp}>
          {selected}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.sections}>
          <div
            className={styles.section}
            onClick={() => setSelected("displays")}
          >
            Displays
          </div>
          <div className={styles.section} onClick={() => setSelected("sound")}>
            Sound
          </div>
          <div className={styles.section} onClick={() => setSelected("power")}>
            Power
          </div>
          <div
            className={styles.section}
            onClick={() => setSelected("appearance")}
          >
            Appearance
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <div className={styles.appearanceContainer}>
              <div className={styles.groupLabel}>Style</div>
              <div className={styles.group}>
                <div>
                  <div>Default</div>
                  <div>Dark</div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.colorSwatches}>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#3584e4'}}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#2190a4'}}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#3a944a'}}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#c88800'}}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#ed5b00'}}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#e62d42'}}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#d56199'}}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#9141ac'}}></div>
                  <div className={styles.colorSwatch} style={{backgroundColor: '#6f8396'}}></div>
                </div>
              </div>
              <div className={styles.groupLabel}>Background</div>
              <div className={styles.group}>
                <div className={styles.backgrounds}>
                  <Image src="/backgrounds/bubbles-l.webp" height={120} width={140} alt="background"/>
                  <Image src="/backgrounds/drool-l.webp" height={120} width={140} alt="background"/>
                  <Image src="/backgrounds/trees-l.webp" height={120} width={140} alt="background"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
