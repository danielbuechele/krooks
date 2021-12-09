import styles from "./Box.module.css";

export default function Box({
  title,
  children,
}: {
  title: string;
  children: any;
}) {
  return (
    <div className={`${styles.container}`}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}
