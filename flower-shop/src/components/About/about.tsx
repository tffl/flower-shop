import "./about.css";

type TeamMember = {
  name: string;
  description: string;
  github: string;
  avatar: string;
};

const team: TeamMember[] = [
  {
    name: "Alena Haurylenka",
    description:
      "Has a background in mathematics and economics and related degree. Previously worked in marketing and finance before deciding to shift to IT in search of a more engaging and in-demand field.",
    github: "https://github.com/elena-gavrilenko",
    avatar: "img/avatar1.png",
  },
  {
    name: "Halina Antonik",
    description:
      "Graduated from Belarusian State University and works as a software engineer. Passionate about learning and web design, with additional studies in Web Design and Computer Graphics.",
    github: "https://github.com/scheslen",
    avatar: "img/avatar2.png",
  },
  {
    name: "Natalya Merkulova",
    description:
      "Graphic and web designer, switched into frontend development. Passionate about convenient interfaces, new technologies and beautiful things.",
    github: "https://github.com/tffl",
    avatar: "img/avatar3.png",
  },
];

export const About = () => {
  return (
    <div className="about-page">
      <h2>Our team</h2>
      <div className="team-container">
        {team.map((member) => (
          <div className="team-card" key={member.github}>
            <img src={member.avatar} alt={member.name} className="avatar" />
            <h3>
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
          </div>
        ))}
      </div>
    </div>
  );
};
