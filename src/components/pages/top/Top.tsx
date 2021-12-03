import type { FC } from "react";
import { Footer } from "../../organisms/footer";
import { Header } from "../../organisms/header";
import { FirstView } from "../../organisms/firstView";
import { Introduction } from "../../organisms/introduction";
import { Features } from "../../organisms/features";

const Top: FC = () => {
  return (
    <>
      <Header />
      <FirstView />
      <Introduction />
      <Features />
      <Footer />
    </>
  );
};

export default Top;
