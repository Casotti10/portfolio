import Header from "./componentes/Header/Header";
import Conteudo from "./componentes/Conteudo/Conteudo";
import Projetos from "./componentes/Projetos/Projetos";
import "./App.css";
import { useState, useRef } from "react";
import Technologies from "./componentes/Tecnologias/Tecnologias";
import Footer from "./componentes/Footer/Footer";

function App() {
  const [projetos, setProjetos] = useState([
    {
      linkDoGithub: "https://github.com/Casotti10/controle-financas",
      caminhoDaImagem: "src/assets/Financeiro.png",
    },
    {
      linkDoGithub: "https://github.com/Casotti10",
      caminhoDaImagem: "src/assets/tesla.png",
    },
    {
      linkDoGithub: "https://github.com/Casotti10",
      caminhoDaImagem: "src/assets/vite.png",
    },
  ]);

  // 🔥 Referência para a seção de projetos
  const projetosRef = useRef(null);

  // 🔥 Função que faz o scroll suave
  const scrollToProjetos = () => {
    projetosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="conteudo-principal">
      <Header />

      {/* Envia a função para o botão */}
      <Conteudo onClickProjetos={scrollToProjetos} />

      <Technologies />

      {/* Aplica o ref na seção de projetos */}
      <div ref={projetosRef}>
        <Projetos projetos={projetos} />
      </div> 

      <Footer/>

    </div>
  );
}

export default App;
