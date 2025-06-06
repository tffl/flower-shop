import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__wrapper container">
        <img
          className="footer__logo"
          src="svg/logoRss.svg"
          alt="logo schools"
        />
        <div className="footer__contacts"></div>
        <p className="footer__txt">This is a non-commercial project built for educational purposes.</p>
        <p className="footer__txt">2025</p>
      </div>
    </footer>
  );
};
