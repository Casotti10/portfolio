// Importa o hook useState para controlar estados no componente
import { useState } from "react";

// Importa o arquivo de estilos CSS
import "./Conteudo.css";

function Conteudo(props) {
  const [aberto, setAberto] = useState(false);
  const toggle = () => setAberto(!aberto);

  return (
    <main className="hero">
      <div className="hero-text">
        <span className="tag">Desenvolvedor Software</span>

        <h1>
          Olá, eu sou <span className="nome-destaque">Lucas</span>
          <span className="nome-destaque2"> Casotti</span>
        </h1>

        <p className="descricao">
          Desenvolvedor de Software, apaixonado por tecnologia e por criar
          experiências digitais modernas e funcionais.
        </p>

        <div className="botoes">
          {/* 🔥 Botão agora chama o scroll */}
          <button className="botao-primario" onClick={props.onClickProjetos}>
            Ver Projetos →
          </button>

          <button className="botao-secundario" onClick={toggle}>
            {aberto ? "Menos informações ▲" : "Saiba mais ▼"}
          </button>
        </div>

        {aberto && (
          <article className="sobre-extra">
            Atuo como Analista de Suporte JR e sou estudante do 2 periodo de
            Análise e Desenvolviemnto de Sistemas na FIAP, e desenvolvo
            aplicações modernas usando Java, Spring Boot, Python + IA e ReactJS.
          </article>
        )}
      </div>

      <div className="hero-imagem">
        <img src="src/assets/programmer.png" alt="Programador" />
      </div>
    </main>
  );
}

export default Conteudo;
