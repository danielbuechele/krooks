import styles from "./Wrapper.module.css";

export default function Wrapper({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <section className={styles.section}>{children}</section>
    </div>
  );
}
