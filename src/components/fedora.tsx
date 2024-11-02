import styles from "../styles/fedora.module.css";
import Desktop from "./desktop";
import TopBar from "./topBar";

export default function Fedora() {
  return (
    <div className={styles.screen}>
      <TopBar />
      <Desktop />
    </div>
  );
}
