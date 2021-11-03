import type { FC } from "react";
import styles from "./OutlineLinkButton.module.scss";

type Props = {
  href: string;
  text: string;
  border?: string;
  color?: string;
};

const OutlineLinkButton: FC<Props> = (props) => {
  const { border, color, href, text } = props;
  return (
    <div className={styles.button} style={{ border: border, color: color }}>
      <a href={href}>{text}</a>
    </div>
  );
};

export default OutlineLinkButton;
