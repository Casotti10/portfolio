import Header from "./componentes/Header/Header";
import Conteudo from "./componentes/Conteudo/Conteudo";
import Projetos from "./componentes/Projetos/Projetos";
import "./App.css";
import { useState } from "react";
import Technologies from "./componentes/Tecnologias/Tecnologias";

function App() {
  const [projetos, setProjetos] = useState([
    {
      linkDoGithub: "https://github.com/Casotti10",
      caminhoDaImagem: "src/assets/facebook.png",
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
  return (
    <div className="conteudo-principal">
      <Header />
      <Conteudo />
      <Technologies/>
      <Projetos projetos={projetos} />

      <footer className="footer">
        <h4>Contato</h4>

        <a href="mailto:lucascasotti1@gmail.com" className="contato-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email"
          />
          lucascasotti1@gmail.com
        </a>

        <a
          href="https://wa.me/5535999242238"
          target="_blank"
          className="contato-item"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
          />
          (35) 99924-2238
        </a>
      </footer>
    </div>
  );
}
export default App;
