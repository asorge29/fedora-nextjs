import styles from "../styles/desktop.module.css";
import { useDesktopContext, useStateContext } from "./stateProvider";
import Window from "./window";

export default function Desktop({ id }: { id: number }) {
  const { state, setState } = useStateContext();
  const { desktopState, setDesktopState } = useDesktopContext();

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
      <Window title="Window">
        <iframe style={{borderRadius: '12px'}}
                src="https://open.spotify.com/embed/playlist/5cyrZNqBNuJOiB4shVkdVP?utm_source=generator" width="100%"
                height="352" frameBorder="0" allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
      </Window>
    </div>
  );
}
