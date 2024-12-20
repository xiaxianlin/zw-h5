import styles from "./index.module.scss";
export function Loading() {
  return (
    <div>
      <span className={styles.loader} />
      <p>加载中...</p>
    </div>
  );
}
