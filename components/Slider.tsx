import styles from "./Slider.module.css";
import k1 from "../public/k1.png";
import k2 from "../public/k2.png";
import k3 from "../public/k3.png";
import k4 from "../public/k4.png";
import k5 from "../public/k5.png";
import k6 from "../public/k6.png";
import k7 from "../public/k7.png";
import k8 from "../public/k8.png";
import k9 from "../public/k9.png";
import Image from "next/image";

export default function Slider() {
  return (
    <div className={styles.container}>
      {[k1, k2, k3, k4, k5, k6, k7, k8, k9].map((k) => (
        <Image {...k} alt="" key={k.src} />
      ))}
    </div>
  );
}
