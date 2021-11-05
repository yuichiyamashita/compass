import type { FC } from "react";
import { Footer } from "../../organisms/footer";
import { Header } from "../../organisms/header";
import Main from "./main/Main";

const Top: FC = () => {
  return (
    <>
      <Header />
      <Main />
      {/* <Footer /> */}
    </>
  );
};

export default Top;
