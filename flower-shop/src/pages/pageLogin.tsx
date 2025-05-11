import { Header } from "../components/Header/Header";
import { Main } from "../components/Login/Main";
import { Footer } from "../components/Footer/Footer";

export const PageLogin = () => {
  return (
    <>
      <Header textColor="var(--color-footer-back)" position="static" iconColor ="var(--color-footer-back)"/>
      <Main />
      <Footer />
    </>
  );
};