import styles from "./Box.module.css";

const backgroundMap = {
  blue: "#1a4796",
  red: "#8e5795",
  purple: "#3b3e78",
};

export default function Box({
  children,
  className,
  color = "blue",
  padding,
}: {
  className?: string;
  children: any;
  color?: "blue" | "red" | "purple";
  padding?: number | string;
}) {
  return (
    <div
      style={{
        backgroundColor: backgroundMap[color],
        borderImageSource: `url("/border-${color}.png")`,
      }}
      className={`${styles.container} ${className ?? ""}`}
    >
      <div className={styles.inner} style={{ padding }}>
        {children}
      </div>
    </div>
  );
}
