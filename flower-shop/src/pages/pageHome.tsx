import { Header } from "../components/Header/Header";
import { Main } from "../components/Home/Main/Main";
import { Footer } from "../components/Footer/Footer";

export const PageHome = () => {
  return (
    <>
      <Header
        textColor="var(--color-txt)}"
        position="absolute"
        backColor="transparent"
      />
      <Main />
      <Footer />
    </>
  );
};
