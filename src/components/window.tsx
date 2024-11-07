import styles from '../styles/window.module.css';

export default function Window({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className={styles.window}>
      <div className={styles.titleBar}>
        <div className={styles.title}>{title}</div>
      </div>
      {children}
    </div>
  );
}