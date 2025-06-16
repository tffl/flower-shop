import { Header } from "../components/Header/Header";
import { Main } from "../components/Basket/Basket";
import { Footer } from "../components/Footer/Footer";

export const PageBasket = () => {
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
