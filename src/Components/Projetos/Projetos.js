import React from "react";
import "./Projetos.css";
import Img1 from "../../assets/img/positive.jpg";
import Img2 from "../../assets/img/thitattoo.jpg";
import Img3 from "../../assets/img/lunazu.jpg";
import Img4 from "../../assets/img/positivemulher.jpg";
import Img5 from "../../assets/img/linkbio.jpg";
import Img6 from "../../assets/img/ebook.jpg";
import AnimeScroll from "../Scroll";

export const Projetos = () => {

  return (
    <section className="projetos" id="projetos">
      <AnimeScroll/>
      <h1 className="js-scroll2">Projetos</h1>
      <div className="paginas-container">
        <div className="pagina js-scroll2">
          <img src={Img1} alt="Imagem site" />
          <h4>Site para empresa de consultoria</h4>
          <button>
            <a
              href="https://www.positiveempresarial.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Visualizar
            </a>
          </button>
        </div>
        <div className="pagina js-scroll">
          <img src={Img2} alt="Imagem site" />
          <h4>Página para estúdio de tatuagem</h4>
          <button disabled>FINALIZANDO</button>
        </div>
        <div className="pagina js-scroll2">
          <img src={Img3} alt="Imagem site" />
          <h4>Site para empresa AGRO</h4>
          <button>
            <a
              href="https://rubens-rodrigues.github.io/SiteLunazu"
              target="_blank"
              rel="noreferrer"
            >
              Visualizar
            </a>
          </button>
        </div>
        <div className="pagina js-scroll">
          <img src={Img4} alt="Imagem site" />
          <h4>Página para venda de Planner</h4>
          <button>
            <a
              href="https://plannerpm.positiveempresarial.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Visualizar
            </a>
          </button>
        </div>
        <div className="pagina js-scroll2">
          <img src={Img5} alt="Imagem site" />
          <h4>Organizador de links</h4>
          <button>
            <a
              href="https://links.positiveempresarial.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Visualizar
            </a>
          </button>
        </div>
        <div className="pagina js-scroll">
          <img src={Img6} alt="Imagem site" />
          <h4>Página para venda de Ebook</h4>
          <button>
            <a
              href="https://ebook.positiveempresarial.com.br"
              target="_blank"
              rel="noreferrer"
            >
              Visualizar
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};
