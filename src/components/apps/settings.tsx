import Window from "@/components/window";
import styles  from "@/styles/settings.module.css";
import {useState} from "react";

export default function Settings() {
  const [selected, setSelected] = useState("Background");

  return (
    <Window title="Settings" app="settings">
      <div className={styles.container}>
        <div className={styles.sections}>
          <div className={styles.section}>Background</div>
          <div className={styles.section}></div>
          <div className={styles.section}></div>
          <div className={styles.section}></div>
          <div className={styles.section}></div>
          <div className={styles.section}></div>
          <div className={styles.section}></div>
        </div>
        <div className={styles.test}>

        </div>
      </div>
    </Window>
  )
}