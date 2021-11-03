import React, { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <small>&copy;COMPASS-2021</small>
        <div className={styles.nav}>
          <a href="./privacy">プライバシーボリシー</a>
          <a href="./privacy">利用規約</a>
          <a href="./contact">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
