import React, { FC } from "react";
import styles from "./HoverAnimationButton.module.scss";

type ButtonProps = {
  href: string;
  text: string;
};

const HoverAnimationButton: FC<ButtonProps> = (props) => {
  return (
    <a href={props.href} className={styles.btn}>
      <span className={styles.text}>{props.text}</span>
    </a>
  );
};

export default HoverAnimationButton;
