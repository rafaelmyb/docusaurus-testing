import React from "react";

import headerLogo from "../../../../static/img/headerLogo.png";

import styles from "./styles.module.css";

export default function NavbarLogo() {
  return (
    <a href={`${window.location.origin}/docs/intro`} className={styles.link}>
      <img src={headerLogo} alt="Header Logo" className={styles.logoImg} />
    </a>
  );
}
