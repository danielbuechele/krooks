import styles from "./Button.module.css";

export default function Button({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return <button className={`${styles.container}`}>{label}</button>;
}
