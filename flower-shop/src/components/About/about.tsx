import "./about.css";

type TeamMember = {
  name: string;
  description: string;
  contribution: string[];
  github: string;
  avatar: string;
};

const team: TeamMember[] = [
  {
    name: "Alena Haurylenka",
    description:
      "Has a background in mathematics and economics and related degree. Previously worked in marketing and finance before deciding to shift to IT in search of a more engaging and in-demand field.",
    contribution: [
      "API Client Setup",
      "Routing Implementation",
      "Main Page Enhancements",
      "Catalog page",
    ],
    github: "https://github.com/elena-gavrilenko",
    avatar: "img/avatar1.png",
  },
  {
    name: "Halina Antonik",
    description:
      "Graduated from Belarusian State University and works as a software engineer. Passionate about learning and web design, with additional studies in Web Design and Computer Graphics.",
    contribution: [
      "Project deployment",
      "Registration Page",
      "User Profile Page",
      "Basket Page",
    ],
    github: "https://github.com/scheslen",
    avatar: "img/avatar2.png",
  },
  {
    name: "Natalya Merkulova",
    description:
      "Graphic and web designer, switched into frontend development. Passionate about convenient interfaces, new technologies and beautiful things.",
    contribution: [
      "Project design",
      "Login Page",
      "Detailed Product Page",
      "About Us Page",
    ],
    github: "https://github.com/tffl",
    avatar: "img/avatar3.png",
  },
];

export const About = () => {
  return (
    <div
      className="about-page"
      style={{ backgroundImage: "url('img/bgroses53b.png')" }}
      >
            <div className="team-container">
          <h2>Our team</h2>
          <div className="team-cards-row">
            {team.map((member) => (
              <div className="team-card" key={member.github}>
                <img src={member.avatar} alt={member.name} className="avatar" />
                <h3 className="contribution-title">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    {member.name}
                  </a>
                </h3>
                <p className="description">{member.description}</p>
                <h4 className="contribution-title">Contribution</h4>
                <ul className="contribution-list">
                  {member.contribution.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="team-description">
          <div className="team-description-text">
            Our team consisted of specialists with diverse backgrounds, which
            allowed us to distribute roles effectively and organize our workflow
            smoothly. Each member brought unique strengths, making the
            collaboration efficient and well-balanced. We began by planning the
            layout in Figma, and then moved on to implementation. Clear task
            distribution helped us stay organized and focused throughout the
            process. Our pleasant communication within the team helps us to
            developed a modern, structured and user-friendly e-commerce
            application.
          </div>
          <div className="logo">
            <a
              href="https://rs.school/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="svg/logoRss2.svg" alt="RSS Logo" className="rss-logo" />
            </a>
          </div>
        </div>
      </div>

  );
};
