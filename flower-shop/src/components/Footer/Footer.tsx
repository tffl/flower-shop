import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__wrapper container">
        <div className="footer__rss">
          <a href="https://rs.school" target="_blank" rel="noopener noreferrer">
            <img
              className="footer__logo"
              src="svg/logoRss.svg"
              alt="logo schools"
            />
          </a>
        </div>
        <div className="footer_names">
          <div className="footer__name">
            <img className="footer__icon" src="svg/github.svg" alt="icon"></img>
            <p>
              <a
                href="https://github.com/elena-gavrilenko"
                target="_blank"
                rel="noopener noreferrer"
                className="github__link"
              >
                Alena Haurylenka
              </a>
            </p>
          </div>

          <div className="footer__name">
            <img className="footer__icon" src="svg/github.svg" alt="icon"></img>
            <p>
              <a href="https://github.com/scheslen"
                target="_blank"
                rel="noopener noreferrer"
                className="github__link"
              >
                Halina Antonik
              </a>
            </p>
          </div>

          <div className="footer__name">
            <img className="footer__icon" src="svg/github.svg" alt="icon"></img>
            <p>
              <a href="https://github.com/tffl"
                target="_blank"
                rel="noopener noreferrer"
                className="github__link"
              >
                Natalya Merkulova
              </a>
            </p>
          </div>
        </div>
        <div className="decor-line"></div>
        <div className="footer__contacts"></div>
        <p className="footer__txt">
          This is a non-commercial project built for educational purposes.
        </p>
        <p className="footer__txt_year">2025</p>
      </div>
    </footer>
  );
};
