import "./Tecnologias.css";

export default function Tecnologias() {
  const techs = [
    "Java",
    "SpringBoot",
    "Python + IA",
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "Node.js"
  ];

  return (
    <section className="tecnologias-container">
      <h2 className="titulo">Tecnologias</h2>

      <div className="tech-list">
        {techs.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
