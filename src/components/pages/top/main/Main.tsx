import * as React from "react";
import styles from "./Main.module.scss";
import { FirstView, Features, Community } from "./index";

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      <FirstView />
      {/* <Features /> */}
      {/* <div className={styles.image_box}>ここにアプリの画像を入れる</div> */}
      {/* <Community /> */}
    </main>
  );
};

export default Main;
