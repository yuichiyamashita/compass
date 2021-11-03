import type { FC } from "react";
import styles from "./ContainButton.module.scss";

type Props = {
  href: string;
  text: string;
  color: string;
  background: string;
  boxShadow?: string;
  transform?: string;
};

const ContainButton: FC<Props> = (props) => {
  return (
    <div
      className={styles.button}
      style={{ color: props.color, background: props.background, boxShadow: props.boxShadow }}
    >
      <a href={props.href}>{props.text}</a>
    </div>
  );
};

export default ContainButton;
