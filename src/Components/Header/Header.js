import React from "react";
import "./Header.css";
import Logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <header>
      <div className="logo js-scroll2">
        <a href="#topo">
          <img style={{ width: "40px" }} src={Logo} alt="Logo" />{" "}
        </a>
        <a href="#topo">
          <h1>Rubens Rodrigues</h1>
        </a>
      </div>
      <div className="itens js-scroll">
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#tecnologias">Tecnologias</a>
        <a href="#contatos" style={{ color: "#329542", fontWeight: "900" }}>
          Contatos
        </a>
      </div>
    </header>
  );
};
