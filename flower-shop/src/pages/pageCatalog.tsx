import { Header } from "../components/Header/Header";
import { Main } from "../components/Catalog/main";
// import { Footer } from "../components/Footer/Footer";

export const PageCatalog = () => {
  return (
    <>
      <Header textColor="var(--color-footer-back)" position="static"/> 
      <Main />
      {/* <Footer /> */}
    </>
  );
};
