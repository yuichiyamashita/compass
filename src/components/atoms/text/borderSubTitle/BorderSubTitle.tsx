import React, { FC } from "react";
import styles from "./BorderSubTitle.module.scss";

type Props = {
  title: string;
  color?: string;
  background?: string;
};

const BorderSubTitle: FC<Props> = (props) => {
  const { title, color, background } = props;
  return (
    <h2 className={styles.border_sub_title} style={{ color: color, background: background }}>
      {title}
    </h2>
  );
};

export default BorderSubTitle;
