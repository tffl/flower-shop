import { Header } from "../components/Header/Header";
import { Main } from "../components/Login/Login";
import { Footer } from "../components/Footer/Footer";

export const PageLogin = () => {
  return (
    <>
      <Header textColor="var(--color-footer-back)" position="static" />
      <Main />
      <Footer />
    </>
  );
};
