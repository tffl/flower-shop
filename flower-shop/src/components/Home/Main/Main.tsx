
import { HeroSection } from "../HeroSection/HeroSection";
import { TaglineSection } from "../TaglineSection/TagLineSection";
import "./main.css";

export const Main = () => {
  return (
    <main className="main">
      <HeroSection />
      <TaglineSection />
    </main>
  );
};
