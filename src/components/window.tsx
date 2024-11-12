import styles from '../styles/window.module.css';
import {useDraggable} from "@dnd-kit/core";
import React from "react";
import {useStateContext} from "./stateProvider";

export default function Window({ title, children, app }: { title: string, children: React.ReactNode, app: string }) {
  const {state, setState} = useStateContext();
  
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: title,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;
  
  const closeApp = () => {
    setState({...state, [app]: -1});
  }

  return (
    <div className={styles.window} style={style} ref={setNodeRef} {...listeners} {...attributes}>
      <div className={styles.titleBar}>
        <div className={styles.title}>{title}</div>
        <div className={styles.closeButton} onClick={closeApp}>X</div>
      </div>
      {children}
    </div>
  );
}