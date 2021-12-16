import React from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

type Props = {
  children: React.ReactNode;
  section: string;
  duration: number;
  delay?: number;
};

const TextAnimation: React.FC<Props> = React.memo((props: Props): React.ReactElement => {
  const { section, duration, delay } = props;
  const setAnimation = (text: string) => {
    const numText = text.length;
    const selector = "#" + section;

    gsap.registerPlugin(TextPlugin);
    gsap.to(`${selector} .animation-text`, {
      duration: numText * duration,
      delay: delay,
      text: {
        value: text,
      },
      ease: "none",
    });
  };

  const textRef = (node: any) => {
    if (node !== null) {
      const text = node.innerHTML; //テキストを読み込む
      const height = node.clientHeight; //高さを取得する
      node.innerHTML = ""; //テキストを削除する
      node.style.height = height + "px"; //高さを設定する
      setAnimation(text);
    }
  };

  return (
    <p ref={textRef} className="animation-text">
      {props.children}
    </p>
  );
});

export default TextAnimation;
