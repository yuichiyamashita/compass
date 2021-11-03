import type { FC } from "react";
import styles from "./Header.module.scss";
import { OutlineLinkButton } from "../../atoms/button";
import { HamburgerMenu } from "..";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <h1 className={styles.logo}>
          <a href="/">compass</a>
        </h1>

        <nav>
          <a href="./features">Features</a>
          <a href="./tutorial">Tutorial</a>
          <a href="./faq">FAQ</a>
          <a href="./news">News</a>
        </nav>

        {/* pc */}
        <div className={styles.pc_btn_container}>
          <OutlineLinkButton text="ログイン" href="./login" />
          <OutlineLinkButton text="会員登録" href="./signup" border="1px solid #8bd5da" color="#8bd5da" />
        </div>

        {/* tab & sp */}
        <div className={styles.hamburger_menu_btn}>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
