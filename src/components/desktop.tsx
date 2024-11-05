import styles from "../styles/desktop.module.css";
import { useStateContext } from "./stateProvider";

export default function Desktop() {

  const { state, setState } = useStateContext();

  return <div className={`${styles.desktop} ${state.maximized ? styles.maximized : styles.notMaximized}`} style={{left: `calc(50% + ${800 * state.selectedDesktop}px)`}}></div>;
}
