import type { FC } from "react";
import styles from "./FirstView.module.scss";
import { HoverAnimationButton, OutlineLinkButton, ContainButton } from "../../../../atoms/button";
import FirstViewImage from "../../../../../assets/images/creative_woman_bl.svg";

const FirstView: FC = () => {
  return (
    <div className={styles.first_view}>
      <div className={styles.wrap}>
        <div className={styles.left_inner}>
          <img src={FirstViewImage} alt="first-view" />
        </div>
        <div className={styles.right_inner}>
          <p className={styles.text}>
            <span>論理的思考力を鍛える</span>
            <br />
            ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。
          </p>
          <div className={styles.btn_container}>
            <HoverAnimationButton text="さっそく始めてみる" href="./signup" />
          </div>
          <div className={styles.btn_container_sp}>
            <ContainButton
              href="./signup"
              text="さっそく始める"
              color="#fff"
              background="#ff9800"
              boxShadow="2px 2px 4px #b26a00"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstView;
