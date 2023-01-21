import React from "react";
import "./Footer.css";
import Whatsapp from "../../assets/img/whatsapp1.png";
import Linkedin from "../../assets/img/linkedin.png";
import GitHub from "../../assets/img/github.png";
import Instagram from "../../assets/img/instagram.png";

export const Footer = () => {
  return (
    <footer className="footer" id="contatos">
      <div className="midias-footer">
        <h1>Contatos</h1>
        <h4>Redes sociais</h4>
        <div className="midias">
          <a href="https://wa.me/558699301002" target="_blank" rel="noreferrer">
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
          <a
            href="https://www.linkedin.com/in/rubens-rodrigues-oficial"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/Rubens-Rodrigues"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHub} alt="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/rubensrodriguesofc/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="copy">
        <p>
          "A sabedoria consiste em compreender que o tempo dedicado ao trabalho
          nunca é perdido."
        </p>
        <span>
          2023 © Todos os direitos reservados. Desenvolvido por{" "}
          <em style={{ color: "#329542" }}>Rubens Rodrigues</em>.
        </span>
      </div>
      <form>
        <h4>
          Envie sua mensagem{" "}
          <span style={{ color: "#329542", fontSize: "20px" }}>✉</span>
        </h4>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="Seu nome"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Um email válido"
          required
        />
        <input
          type="text"
          name="mensagem"
          id="mensagem"
          placeholder="Deixe sua mensagem"
          required
        />
        <button type="submit" name="submit" id="submit">
          ENVIAR
        </button>
      </form>
    </footer>
  );
};
