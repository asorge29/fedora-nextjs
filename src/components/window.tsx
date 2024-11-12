import styles from '../styles/window.module.css';
import {useDraggable} from "@dnd-kit/core";
import React from "react";

export default function Window({ title, children }: { title: string, children: React.ReactNode }) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: title,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div className={styles.window} style={style} ref={setNodeRef} {...listeners} {...attributes}>
      <div className={styles.titleBar}>
        <div className={styles.title}>{title}</div>
      </div>
      {children}
    </div>
  );
}