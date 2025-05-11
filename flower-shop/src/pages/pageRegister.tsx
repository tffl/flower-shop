import { Header } from "../components/Header/Header";
import { Main } from "../components/Register/Main";
import { Footer } from "../components/Footer/Footer";

export const PageRegister = () => {
  return (
    <>
      <Header textColor="var(--color-footer-back)" position="static"/>
      <Main />
      <Footer />
    </>
  );
};
