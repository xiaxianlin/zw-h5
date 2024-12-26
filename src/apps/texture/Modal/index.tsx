import styles from "./index.module.scss";
export function Modal() {
  return (
    <div
      className={styles.mask}
      onTouchStart={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={styles.body}></div>
    </div>
  );
}
