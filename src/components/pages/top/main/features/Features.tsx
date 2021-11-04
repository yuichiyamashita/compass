import * as React from "react";
import styles from "./Features.module.scss";
import selfDebateImage from "../../../../../assets/images/self_debate.svg";
import deepenThinkImage from "../../../../../assets/images/deepen_think.svg";
import { BorderSubTitle } from "../../../../atoms/typography";
import { Container } from "../../../../molecules/container";

const Features: React.FC = () => {
  return (
    <div className={styles.features}>
      <Container>
        <BorderSubTitle
          title="FEATURES"
          fontSize="24px"
          fontWeight={600}
          letterSpacing="3px"
          borderWidth="50px"
          borderHeight="2px"
          borderColor="#555"
        />
        <div className={styles.item}>
          <div className={styles.item_text}>
            <dl>
              <dt>
                SELF DEBATE
                <br />
                <span>1人で答えを導き出す</span>
              </dt>
              <dd>
                ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。
                ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。
              </dd>
            </dl>
          </div>
          <div className={styles.item_image}>
            <img src={selfDebateImage} alt="self-debate" />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.item_explain}>
            <dl>
              <dt>
                DEEPEN THINK
                <br />
                <span>1つのことを深く考える</span>
              </dt>
              <dd>
                ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。ここに補足文章が入ります。
              </dd>
            </dl>
          </div>
          <div className={styles.item_image}>
            <img src={deepenThinkImage} alt="deepen-think" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
