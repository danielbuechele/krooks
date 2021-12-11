import styles from "./Button.module.css";

export default function Button({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <a
      target="_blank"
      href={href}
      className={`${styles.container}`}
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
