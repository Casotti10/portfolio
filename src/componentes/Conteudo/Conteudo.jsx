// Importa o hook useState para controlar estados no componente
import { useState } from "react";

// Importa o arquivo de estilos CSS
import "./Conteudo.css";

function Conteudo() {

  // Estado "aberto" controla se o texto extra está visível ou não
  const [aberto, setAberto] = useState(false);

  // Função que alterna o estado: expande ou recolhe o texto extra
  const toggle = () => setAberto(!aberto);

  return (
    // Container principal da seção hero
    <main className="hero">
      
      {/* Área de texto posicionada à esquerda */}
      <div className="hero-text">

        {/* Tag de categoria (estilizada como um selo) */}
        <span className="tag">Desenvolvedor Software</span>

        {/* Título principal com destaque no nome */}
        <h1>
          Olá, eu sou <span className="nome-destaque">Lucas</span> 
          <span className="nome-destaque2"> Casotti</span>
        </h1>

        {/* Parágrafo de apresentação */}
        <p className="descricao">
         Desenvolvedor de Software, apaixonado por tecnologia e por criar experiências digitais modernas e funcionais.
        </p>

        {/* Área com os botões */}
        <div className="botoes">
          
          {/* Botão principal que leva aos projetos */}
          <button className="botao-primario">Ver Projetos →</button>

          {/* Botão secundário que expande e recolhe a descrição */}
          <button className="botao-secundario" onClick={toggle}>
            {/* Renderização condicional baseada no estado "aberto" */}
            {aberto ? "Menos informações ▲" : "Saiba mais ▼"}
          </button>
        </div>

        {/* Só renderiza o texto extra caso "aberto" seja true */}
        {aberto && (
          <article className="sobre-extra">
           Atuo como Analista de Suporte JR e sou estudante do 2 periodo de Análise e Desenvolviemnto de Sistemas na FIAP, e desenvolvo aplicações modernas
            usando Java, Spring Boot, Python + IA e ReactJS.
          </article>
        )}
      </div>

      {/* Área da imagem (lado direito) */}
      <div className="hero-imagem">
        <img src="src/assets/programmer.png" alt="Programador" />
      </div>

    </main>
  );
}

// Exporta o componente para ser usado em App.jsx
export default Conteudo;
