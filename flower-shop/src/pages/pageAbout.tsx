import { Header } from "../components/Header/Header";
import { About } from "../components/About/about";
import { Footer } from "../components/Footer/Footer";

export const PageAbout = () => {
  return (
    <>
      <Header
        textColor="var(--color-footer-back)"
        position="static"
        iconColor="var(--color-footer-back)"
      />
      <About />
      <Footer />
    </>
  );
};
