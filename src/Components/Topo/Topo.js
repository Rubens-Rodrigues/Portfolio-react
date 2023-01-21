import React from "react";
import "../Topo/Topo.css";
import Foto from "../../assets/img/perfil.png";
import Linkedin from "../../assets/img/linkedin.png";
import GitHub from "../../assets/img/github.png";
import Instagram from "../../assets/img/instagram.png";
import AnimeScroll from "../Scroll";

export const Topo = () => {
  return (
    <section className="topo" id="topo">
      <AnimeScroll />
      <div className="descricao">
        <h1 className="js-scroll2">Front-end</h1>
        <h2 className="js-scroll2">WEB Developer</h2>
        <p className="js-scroll2">
          Desenvolvendo a melhor experiência de transformação digital para você
          empreendedor.
        </p>
        <button className="js-scroll2">
          <a href="https://wa.me/558699301002" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </button>
        <div className="icons-top js-scroll2">
          <h3>Redes sociais</h3>
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
      <img className="foto-perfil js-scroll" src={Foto} alt="Foto Perfil" />
    </section>
  );
};
