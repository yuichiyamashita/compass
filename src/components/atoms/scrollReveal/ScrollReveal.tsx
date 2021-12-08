import React, { useRef, useEffect, CSSProperties } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealProps {
  style?: CSSProperties;
  origin?: string;
  delay?: number;
  duration?: number;
  distance?: string;
  reset?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, style, origin, delay, duration, distance, reset }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        delay: delay,
        distance: distance,
        duration: duration,
        origin: origin,
        reset: reset ? reset : false,
        easing: "ease-in-out",
        viewFactor: 1.0,
      });
  }, [delay, distance, duration, origin, reset]);

  return (
    <section ref={sectionRef} style={style}>
      {children}
    </section>
  );
};
export default ScrollReveal;
