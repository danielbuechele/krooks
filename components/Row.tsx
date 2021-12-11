import styles from "./Row.module.css";
import { Property } from "csstype";

export default function Row({
  children,
  spread,
  center,
  gap,
  equal,
  className,
  mobileVertical,
}: {
  children: any;
  gap?: number;
  center?: boolean;
  spread?: boolean;
  equal?: boolean;
  className?: string;
  mobileVertical?: boolean;
}) {
  return (
    <div
      style={{
        justifyContent: spread == true ? "space-between" : undefined,
        alignItems: center == true ? "center" : undefined,
        gap,
      }}
      className={`${styles.container} ${className ?? ""} ${
        equal ? styles.equal : ""
      } ${mobileVertical ? styles.vertical : ""}`}
    >
      {children}
    </div>
  );
}
