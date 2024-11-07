import styles from "../styles/desktop.module.css";
import { useStateContext } from "./stateProvider";

export default function Desktop({ id }: { id: number }) {
  const { state, setState } = useStateContext();
  //const { desktopState, setDesktopState } = useDesktopContext();

  const notMaximizedStyle = {
    left: `calc(50% + ${-80 * state.selectedDesktop}vw + ${id * 80}vw)`,
  };

  const maximizedStyle = {
    left: `calc(50% + ${-105 * state.selectedDesktop}vw + ${id * 105}vw)`,
  };

  const maximizeDesktop = () => {
    if (!state.maximized) {
      setState({ ...state, maximized: true });
      return;
    }
  };

  return (
    <div
      className={`${styles.desktop} ${state.maximized ? styles.maximized : styles.notMaximized} ${state.selectedDesktop !== id && !state.maximized ? styles.notSelected : null}`}
      style={state.maximized ? maximizedStyle : notMaximizedStyle}
      onClick={maximizeDesktop}
    >
      
    </div>
  );
}
