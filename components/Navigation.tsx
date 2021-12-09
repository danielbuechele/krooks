import styles from "./Navigation.module.css";
import Wrapper from "./Wrapper";
import logo from "../public/logo.png";
import Image from "next/image";
import React from "react";
import Row from "./Row";

export default function Navigation() {
  return (
    <Wrapper className={styles.container}>
      <Row spread center>
        <Image {...logo} className={styles.logo} alt="Krooks Logo" />
        <ul>
          <li>
            <a href="">Rarities</a>
          </li>
          <li>
            <a href="">Buy</a>
            <ul>
              <li>
                <a href="">Magic Eden</a>
              </li>
              <li>
                <a href="">Alpha Art</a>
              </li>
            </ul>
          </li>
        </ul>
      </Row>
    </Wrapper>
  );
}
