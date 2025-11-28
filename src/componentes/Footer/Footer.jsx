import "./Footer.css";

function Footer() {
  return (
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

      <div className="footer-right">
        <p>
          © 2025 Desenvolvido com <span className="coracao">❤️</span> por Lucas Casotti
        </p>
      </div>

    </footer>
  );
}

export default Footer;
