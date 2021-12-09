import styles from "./Row.module.css";
import { Property } from "csstype";

export default function Row({
  children,
  spread,
  center,
}: {
  children: any;
  gap?: number;
  center?: boolean;
  spread?: boolean;
}) {
  return (
    <div
      style={{
        justifyContent: spread == true ? "space-between" : undefined,
        alignItems: center == true ? "center" : undefined,
      }}
      className={styles.container}
    >
      {children}
    </div>
  );
}
