import "./tagline.css";
export const TaglineSection = () => {
  return (
    <section
      className="tagline"
      style={{ backgroundImage: "url('img/bgroses3.png')" }}
    >
      <p className="tagline__txt">
        Your garden starts here — discover plants, tools and ideas to make it
        magic
      </p>
      <div className="decor-line"></div>
    </section>
  );
};
