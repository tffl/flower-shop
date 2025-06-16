import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__wrapper container">
        <div className="footer_names">
          <div className="footer__name">
            <img className="footer__icon" src="svg/github.svg" alt="icon"></img>
            <p>Alena Haurylenka</p>
          </div>

          <div className="footer__name">
            <img className="footer__icon" src="svg/github.svg" alt="icon"></img>
            <p> Halina Antonik</p>
          </div>

          <div className="footer__name">
            <img className="footer__icon" src="svg/github.svg" alt="icon"></img>
            <p> Natalya Merkulova</p>
          </div>
        </div>
        <div className="footer__rss">
          <img
            className="footer__logo"
            src="svg/logoRss.svg"
            alt="logo schools"
          />
          <div className="footer__contacts"></div>
          <p className="footer__txt">
            This is a non-commercial project built for educational purposes.
          </p>
          <p className="footer__txt">2025</p>
        </div>
      </div>
    </footer>
  );
};
