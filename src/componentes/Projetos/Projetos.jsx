import "./Projetos.css";

function Projetos({ projetos }) {
  return (
    <section className="projetos-container">
      <h2 className="titulo-projetos">Meus Projetos</h2>
      <p className="subtitulo-projetos">
        Explore alguns dos meus trabalhos mais recentes
      </p>

      <div className="grid-projetos">
        {projetos.map((projeto, index) => (
          <div className="card-projeto" key={index}>
            
            <img
              className="imagem-projeto"
              src={projeto.caminhoDaImagem}
              alt={
                index === 0
                  ? "Sistema de Gestão Financeiro Pessoal"
                  : `Projeto ${index + 1}`
              }
            />

            <div className="conteudo-card">
              <h3 className="titulo-card">
                {index === 0
                  ? "Sistema de Gestão Financeiro Pessoal"
                  : `Projeto ${index + 1}`}
              </h3>

              <p className="descricao-card">
                Clique para acessar o código deste projeto no GitHub.
              </p>

              <a
                href={projeto.linkDoGithub}
                target="_blank"
                className="btn-card"
              >
                Ver Projeto
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
