import styles from "../styles/desktop.module.css";
import { useStateContext } from "./stateProvider";

export default function Desktop({ id }: { id: number }) {

  const { state, setState } = useStateContext();

  return <div className={`${styles.desktop} ${state.maximized ? id === state.selectedDesktop ? styles.maximized : styles.hidden : styles.notMaximized}`} style={{left: `calc(50% + ${-65 * state.selectedDesktop}vw + ${id * 65}vw)`}}>
    {id}
  </div>;
}
