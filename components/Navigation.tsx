import styles from "./Navigation.module.css";
import Wrapper from "./Wrapper";
import logo from "../public/krooks-logo.svg";
import kk from "../public/kk.png";
import Image from "next/image";
import React from "react";
import Row from "./Row";
import Discord from "./Discord";
import Twitter from "./Twitter";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Box from "./Box";

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
              <a
                href="https://moonrank.app/collection/krooks"
                target="_blank"
                rel="noreferrer"
              >
                Rarities
              </a>
            </li>
            <li>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className={styles.trigger}>
                  Buy
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className={styles.menu} align="end">
                  <Box>
                    <DropdownMenu.Item className={styles.item}>
                      <a
                        href="https://magiceden.io/marketplace/the_krooks"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Magic Eden
                      </a>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className={styles.item}>
                      <a
                        href="https://alpha.art/collection/the-krooks"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Alpha Art
                      </a>
                    </DropdownMenu.Item>
                  </Box>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </li>
            <li>
              <Discord />
            </li>
            <li>
              <Twitter />
            </li>
          </ul>
        </Row>
      </Row>
    </Wrapper>
  );
}
