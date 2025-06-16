import { Header } from "../components/Header/Header";
import { Main } from "../components/Profile/Profile";
import { Footer } from "../components/Footer/Footer";

export const PageProfile = () => {
  return (
    <>
      <Header
        textColor="var(--color-footer-back)"
        position="static"
        iconColor="var(--color-footer-back)"
      />
      <Main />
      <Footer />
    </>
  );
};
