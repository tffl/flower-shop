import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageHome } from "./pages/pageHome";
import { PageNotFound } from "./pages/pageNotFound";
import { PageLogin } from "./pages/pageLogin";
import { PageRegister } from "./pages/pageRegister";
import { PageProfile } from "./pages/pageProfile";
import { PageAbout } from "./pages/pageAbout";
import { PageCatalog } from "./pages/pageCatalog";
import { AuthProvider } from "./components/contexts/AuthContext";
import "./app/styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/profile" element={<PageProfile />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/catalog" element={<PageCatalog />} />
          <Route path="/" element={<PageHome />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
