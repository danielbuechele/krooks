import styles from "./Navigation.module.css";
import Wrapper from "./Wrapper";
import logo from "../public/krooks-logo.svg";
import kk from "../public/kk.png";
import Image from "next/image";
import React from "react";
import Row from "./Row";
import Discord from "./Discord";
import Twitter from "./Twitter";

export default function Navigation() {
  return (
    <Wrapper className={styles.container}>
      <Row spread center>
        <Row center gap={10}>
          <Image {...kk} width={48} height={48} alt="Krooks Logo" />
          <Image {...logo} alt="The Krooks" />
        </Row>
        <Row center gap={16}>
          <ul className={styles.ul}>
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
          <Discord />
          <Twitter />
        </Row>
      </Row>
    </Wrapper>
  );
}
