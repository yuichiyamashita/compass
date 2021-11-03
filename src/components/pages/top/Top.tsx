import type { FC } from "react";
import { Header, Footer } from "../../organisms";
import Main from "./main/Main";

const Top: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default Top;
