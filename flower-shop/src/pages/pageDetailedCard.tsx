import { Header } from "../components/Header/Header";
import { Catalog } from "../components/Catalog/catalog";
import { Footer } from "../components/Footer/Footer";

export const PageCatalog = () => {
  return (
    <>
      <Header
        textColor="var(--color-footer-back)"
        position="static"
        iconColor="var(--color-footer-back)"
      />
      <Catalog />
      <Footer />
    </>
  );
};
