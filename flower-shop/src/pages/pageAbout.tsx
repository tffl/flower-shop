import { Header } from "../components/Header/Header";
import { Main } from "../components/About/main";
// import { Footer } from "../components/Footer/Footer";

export const PageAbout = () => {
  return (
    <>
      <Header
        textColor="var(--color-footer-back)"
        position="static"
        iconColor="var(--color-footer-back)"
      />
      <Main />
      {/* <Footer /> */}
    </>
  );
};
