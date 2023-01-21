import React from "react";
import "./Sobre.css";

export const Sobre = () => {
  return (
    <section className="sobre" id="sobre">
      <div className="titulo js-scroll2">
        <h1>Sobre</h1>
        <h2>
          Resumo sobre <em style={{ color: "#329542" }}>mim.</em>
        </h2>
      </div>
      <div className="conteudo js-scroll">
        <p>
          Ola! Me chamo{" "}
          <em style={{ color: "#329542" }}>Rubens Clemente Rodrigues</em>, tenho
          38 anos, casado e pai de um garotinho muito inteligente chamado
          Geraldo. Moro em Teresina-PI, adoro ler livros que me ensinem algo.
          Pratico jiu-jitsu como hobby a mais de 10 anos, sendo graduado faixa
          preta em 2021 e voluntário em um projeto social na cidade. Minhas
          habilidades estão na área da{" "}
          <em style={{ color: "#329542" }}>
            comunicação e no desenvolvimento{" "}
          </em>
          de relacionamentos e projetos, assim como na execução de tarefas que
          exijam detalhismo e precisão. Possuo assertividade na condução de
          pontos de vista e qualidades intuitivas para criar e me adaptar a
          novas situações. Formado em Analise e{" "}
          <em style={{ color: "#329542" }}>Desenvolvimento de Sistemas,</em>atuo
          a pouco mais de dois anos como Desenvolvedor Web Front-end, procurando
          sempre utilazar do que a de mais moderno para auxiliar na experiência
          do emprendedor e das empresas na busca pela{" "}
          <em style={{ color: "#329542" }}>transformação digital.</em>
        </p>
      </div>
    </section>
  );
};
