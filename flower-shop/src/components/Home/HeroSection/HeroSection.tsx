import "./heroSection.css";
export const HeroSection = () => {
  return (
    <section
      className="heroSection"
      style={{ backgroundImage: "url('img/bgmain.png')" }}
    >
      <h1 className="heroSection__title">
        Bringing beauty to every garden. Fresh plants, quality tools and
        blooming inspiration.
      </h1>
    </section>
  );
};
