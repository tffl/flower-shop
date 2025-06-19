import "./tagline.css";
export const TaglineSection = () => {
  return (
    <section
      className="tagline"
      style={{ backgroundImage: "url('img/bgroses_all.png')" }}
    >
      <p className="tagline__txt">
        Your garden starts here — discover plants, tools and ideas to make it
        magic
      </p>
      <div className="decor-line"></div>

      <p className="tagline__txt">
        Summer discounts <b>20%</b> on everything with promo code{" "}
        <b>flower20</b>
      </p>
    </section>
  );
};
